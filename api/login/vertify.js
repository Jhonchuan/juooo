const svgCaptcha = require("svg-captcha")
const { encode, decode } = require("../module/tools")

const fs = require("fs")
const md5 = require("md5-node")
const { getCode, checkCode } = require("../module/upFiles")
module.exports = {
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
    const { userName, type, phoneCaptcha } = req.query
    const data = await checkCode(userName, type, phoneCaptcha)
    console.log(data)
    if (data.ok !== -1) {
      res.json({
        ...data,
        token: encode({ userName: req.query.mobile, type: "mobile" }),
      })
    } else {
      res.json(data)
    }
  },
}
