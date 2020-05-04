// const svgCaptcha = require("svg-captcha")
const express = require("express")
const md5 = require("md5-node")
const bodyParser = require("body-parser")
const vertify = require("./login/vertify")
const { encode, decode } = require("./module/tools")
// const fs = require("fs")
// const stringRandom = require("string-random")
const app = express()
app.use(bodyParser.json())
const key = "@$%&*****"
// 获得图形验证码
app.get("/get-img-verify", vertify.getImgVertify)
// 验证图形验证码
app.get("/sendVerifyCode", (req, res) => {
  const captchaReq = md5(req.query.vertifyCode.toLowerCase())
  if (req.query.gid === captchaReq) console.log(true)
  res.json({
    ok: -1,
    msg: "测试",
  })
  // res.json({
  //   ok: 1,
  //   reset_token: "",
  //   userType: "mobile",
  // })
})
// 验证手机注册图形验证码
app.get("/sendMobileLoginSms", (req, res) => {
  const captchaReq = md5(req.query.captcha.toLowerCase())
  if (req.query.gid === captchaReq) {
    const captchaText = Math.floor(Math.random() * 10000)
    res.json({
      ok: 1,
      msg: "发送手机验证码",
      captchaText,
      token: encode({ userName: req.query.mobile, type: "mobile" }),
    })
  } else {
    res.json({ ok: -1, msg: "验证码错误" })
  }
})
// app.all("*", (req, res, next) => {
//   const token = req.headers.authorization
//   const { ok, msg, info } = decode(token)
//   if (ok === 3) next()
//   else json(res, ok, msg)
// })
app.listen(8081, () => {
  console.log("success")
})
