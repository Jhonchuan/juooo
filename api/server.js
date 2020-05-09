// const svgCaptcha = require("svg-captcha")
const express = require("express")
const md5 = require("md5-node")
const bodyParser = require("body-parser")
const vertify = require("./login/vertify")
const { encode, decode } = require("./module/tools")
const { find, insertOne } = require("./module/mydb")
const fs = require("fs")
const db = require("./module/db")

const app = express()
app.use(express.static(__dirname + "/dataBase"))
app.use(bodyParser.json())
const key = "@$%&*****"
// 登录
app.get("/login", vertify.login)
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
// 重设密码信息检查
app.get("/resetPassword", vertify.resetPassword)
// 加入购物车王新爱版本
app.post("/addCart", async (req, res) => {
  const {
    userName,
    showId,
    showTitle,
    showPic,
    startDate,
    startTime,
    showCity,
    showThreater,
    showPrice,
  } = req.body
  find("cartList", { showId, userName }, (err, results) => {
    if (results.length > 1) {
      res.json({ ok: -1, msg: "您已购买该票，不得重复购买" })
    } else {
      insertOne(
        "cartList",
        {
          userName,
          showId,
          showTitle,
          showPic,
          startDate,
          startTime,
          showCity,
          showThreater,
          showPrice,
        },
        (error, result) => {
          res.json({
            ok: 1,
            msg: "加入购物车成功",
          })
        }
      )
    }
  })
})
// 加入购物车组长版本
// app.post("/addCart", async (req, res) => {
//   const {
//     showId,
//     showTitle,
//     showPic,
//     startDate,
//     startTime,
//     showCity,
//     showThreater,
//     showPrice,
//   } = req.body
//   const showInfo = await db.findOne("cartList", {
//     showId,
//   })
//   if (showInfo) {
//     //已经买过
//     await db.updateOne(
//       "cartList",
//       { showId },
//       {
//         $inc: {
//           buyNum: 1,
//         },
//       }
//     )
//   } else {
//     await db.insertOne("cartList", {
//       showId,
//       showTitle,
//       showPic,
//       startDate,
//       startTime,
//       showCity,
//       showThreater,
//       showPrice,
//       buyNum: 1,
//     })
//   }
//   res.json({
//     ok: 1,
//     msg: "加入购物车成功",
//   })
// })
// 获取购物车列表
app.get("/getCar", (req, res) => {
  const { userName } = req.query
  find("cartList", { userName }, (err, result) => {
    res.json({ ok: 1, msg: "获得信息成功", result })
  })
})
app.listen(8081, () => {
  console.log("5.5success")
})
