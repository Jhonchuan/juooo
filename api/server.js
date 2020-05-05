// const svgCaptcha = require("svg-captcha")
const express = require("express")
const md5 = require("md5-node")
const bodyParser = require("body-parser")
const vertify = require("./login/vertify")
const { encode, decode } = require("./module/tools")
const fs = require("fs")

const app = express()
app.use(express.static(__dirname + "/dataBase"))
app.use(bodyParser.json())
const key = "@$%&*****"
// 获得图形验证码
app.get("/get-img-verify", vertify.getImgVertify)
// 验证手机注册图形验证码
app.get("/sendMobileLoginSms", vertify.checkImgVertify)
// 获取手机验证码
app.get("/getPhoneCode", vertify.getPhoneCode)
// 验证手机验证码
app.get("/sendPhoneCode", vertify.sendPhoneCode)
// 更改用户信息
app.put("/changeInfo", vertify.changeInfo)

// study验证图形验证码
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

// app.all("*", (req, res, next) => {
//   const token = req.headers.authorization
//   const { ok, msg, info } = decode(token)
//   if (ok === 3) next()
//   else json(res, ok, msg)
// })
app.listen(8081, () => {
  console.log("5.5success")
})
