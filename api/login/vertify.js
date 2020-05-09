const svgCaptcha = require("svg-captcha")
const { encode, decode } = require("../module/tools")
const fs = require("fs")
const md5 = require("md5-node")
const { getCode, checkCode, changedb, find } = require("../module/upFiles")
module.exports = {
  async login(req, res) {
    const { userName, password } = req.query
    find("mobile", { userName, password }, (err, result) => {
      if (err) {
        find("email", { userName, password }, (err, result) => {
          if (err) {
            res.json({ ok: -1, msg: err })
          } else {
            res.json({ ok: 1, msg: "登陆成功" })
          }
        })
      } else {
        res.json({ ok: 1, msg: "登陆成功" })
      }
    })
  },
  // 重设密码
  resetPassword(req, res) {
    const { userName } = req.query
    find("mobile", { userName }, (err, result) => {
      if (err) {
        find("email", { userName }, (err, result) => {
          if (err) {
            res.json({ ok: -1, msg: "该用户并未注册" })
          } else {
            const captchaReq = md5(req.query.captcha.toLowerCase())
            if (req.query.gid === captchaReq) {
              res.json({
                ok: 1,
                msg: "图形验证通过",
                userType: "email",
              })
            } else {
              res.json({ ok: -1, msg: "验证码错误" })
            }
          }
        })
      } else {
        const captchaReq = md5(req.query.captcha.toLowerCase())
        if (req.query.gid === captchaReq) {
          res.json({
            ok: 1,
            msg: "图形验证通过",
            userType: "mobile",
          })
        } else {
          res.json({ ok: -1, msg: "验证码错误" })
        }
      }
    })
  },
  // 获取手机图形验证码
  getImgVertify(req, res) {
    const codeConfig = {
      size: 4, //验证码长度
      width: 100,
      height: 50,
      noise: 4, //干扰线条数
      fontSize: 32,
      ignoreChars: "0o1i", //验证码字符中排除'0o1i'
    }
    // 验证码，有两个属性，text是字符，data是svg代码
    const captcha = svgCaptcha.create(codeConfig)
    // 加密验证码
    const captchaCode = md5(captcha.text.toLowerCase())
    const codeData = {
      img: captcha.data,
    }
    console.log(captcha.text)
    res.json({ codeData, captchaCode })
  },
  //验证手机注册图形验证码
  checkImgVertify(req, res) {
    const captchaReq = md5(req.query.captcha.toLowerCase())
    if (req.query.gid === captchaReq) {
      res.json({
        ok: 1,
        msg: "图形验证通过",
      })
    } else {
      res.json({ ok: -1, msg: "验证码错误" })
    }
  },
  // 获取手机验证码
  async getPhoneCode(req, res) {
    const { userName, type } = req.query
    const captcha = await getCode(userName, type)
    res.json({ ok: 1, phoneCaptcha: captcha })
  },
  // 验证手机验证码
  async sendPhoneCode(req, res) {
    const { step, userName, type, phoneCaptcha } = req.query
    const data = await checkCode(step, userName, type, phoneCaptcha)
    if (data.ok !== -1) {
      res.json({
        ...data,
        token: encode({ userName: req.query.mobile, type: "mobile" }),
      })
    } else {
      res.json(data)
    }
  },
  // 更改用户信息（密码）
  async changeInfo(req, res) {
    const { infoToChange, info } = req.body
    const data = await changedb(infoToChange, info)
    if (data.ok === 1) res.json(data)
    else res.json({ ok: -1, msg: "测试" })
  },
}
