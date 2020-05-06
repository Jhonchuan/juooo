const fs = require("fs")
const stringRandom = require("string-random")
module.exports = {
  // 获取验证码
  getCode(userName, type) {
    return new Promise((resolve, reject) => {
      const captcha = stringRandom(4)
      const date = Date.now()
      const params = {
        captcha,
        type,
        userName,
        date,
      }
      fs.readFile("./dataBase/db.json", function (err, data) {
        if (err) {
          reject(err)
        }
        var person = data.toString() //将二进制的数据转换为字符串
        person = JSON.parse(person) //将字符串转换为json对象
        const isGeted = person.captcha.findIndex(
          v => v["userName"] === userName
        )
        if (isGeted !== -1) {
          person.captcha.splice(isGeted, 1)
        }
        person.captcha.push(params) //将传来的对象push进数组对象中
        var str = JSON.stringify(person) //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
        fs.writeFile("./dataBase/db.json", str, function (err) {
          if (err) {
            reject(err)
          } else resolve(captcha)
        })
      })
    })
  },
  //   验证登录信息
  checkCode(userName, type, phoneCaptcha) {
    return new Promise((resolve, reject) => {
      fs.readFile("./dataBase/db.json", function (err, data) {
        if (err) {
          reject(err)
        }
        var person = data.toString() //将二进制的数据转换为字符串
        person = JSON.parse(person) //将字符串转换为json对象
        const isTrue = person.captcha.find(v => v["captcha"] === phoneCaptcha)
        if (isTrue && isTrue["userName"] === userName) {
          if (Date.now() - isTrue.date <= 5 * 60 * 1000) {
            const info = person[type].findIndex(v => v["userName"] === userName)
            if (info !== -1) {
              person[type][info]["loginTime"] = Date.now()
              resolve({ ok: 4, msg: "登录成功" })
            } else {
              const params = {
                id: Date.now() + stringRandom(10),
                userName: userName,
                type: type,
                addTime: Date.now(),
                loginTime: Date.now(),
                password: "",
                vip: false,
              }
              person[type].push(params) //将传来的对象push进数组对象中
              let str = JSON.stringify(person) //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
              fs.writeFile("./dataBase/db.json", str, function (err) {
                if (err) {
                  reject(err)
                } else {
                  type === "email"
                    ? resolve({ ok: 2, msg: "邮箱注册成功" })
                    : resolve({ ok: 1, msg: "手机注册成功" })
                }
              })
            }
          } else {
            resolve({ ok: -1, msg: "验证码过期" })
          }
        } else resolve({ ok: -1, msg: "验证码错误" })
      })
    })
  },
  changedb(infoToChange, info) {
    return new Promise((resolve, reject) => {
      fs.readFile("./dataBase/db.json", function (err, data) {
        if (err) {
          reject(err)
        }
        var person = data.toString() //将二进制的数据转换为字符串
        person = JSON.parse(person) //将字符串转换为json对象
        const isIndex = person[info.type].findIndex(
          v => v["userName"] === info.userName
        )
        if (isIndex !== -1) {
          person[info.type][isIndex] = {
            ...person[info.type][isIndex],
            ...infoToChange,
          }
          let str = JSON.stringify(person) //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
          fs.writeFile("./dataBase/db.json", str, function (err) {
            err ? reject(err) : resolve({ ok: 1, msg: "用户信息更改成功" })
          })
        } else reject({ ok: -1, msg: "没有找到该用户" })
      })
    })
  },
}
