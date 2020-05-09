const fs = require("fs")
const stringRandom = require("string-random")
function where(collection, source) {
  return collection.filter(function (item) {
    let index = 0
    for (let key in source) {
      if (item[key] && source[key] === item[key]) {
        index++
      }
    }
    return index === Object.keys(source).length
  })
}
function whereIndex(collection, source) {
  return collection.findIndex(function (item) {
    let index = 0
    for (let key in source) {
      if (item[key] && source[key] === item[key]) {
        index++
      }
    }
    return index === Object.keys(source).length
  })
}
module.exports = {
  find(colName, whereObj, cb) {
    return new Promise((resolve, reject) => {
      fs.readFile("./dataBase/db.json", function (err, data) {
        if (err) return cb("文件读取错误", [])
        var person = data.toString()
        person = JSON.parse(person)
        if (Object.keys(whereObj).length === 0) {
          return cb("", person[colName])
        } else {
          if (where(person[colName], whereObj).length <= 0)
            return cb("找不到该数据", [])
          else return cb("", where(person[colName], whereObj))
        }
      })
    })
  },
  insertOne(colName, insertObj, cb) {
    return new Promise((resolve, reject) => {
      fs.readFile("./dataBase/db.json", function (err, data) {
        if (err) return cb("文件读取错误", [])
        var person = data.toString() //将二进制的数据转换为字符串
        person = JSON.parse(person) //将字符串转换为json对象
        const params = { id: Date.now() + stringRandom(10), ...insertObj }
        person[colName].unshift(params) //将传来的对象push进数组对象中
        var str = JSON.stringify(person) //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
        fs.writeFile("./dataBase/db.json", str, function (err) {
          if (err) return cb("文件插入错误", [])
          else return cb("", "插入成功")
        })
      })
    })
  },
  deleteOne(colName, whereObj, cb) {
    return new Promise((resolve, reject) => {
      fs.readFile("./dataBase/db.json", function (err, data) {
        if (err) {
          reject(err)
        }
        var person = data.toString() //将二进制的数据转换为字符串
        person = JSON.parse(person) //将字符串转换为json对象
        const isGeted = whereIndex(person[colName], whereObj)
        if (isGeted !== -1) {
          person[colName].splice(isGeted, 1)
        } else {
          return cb("未找到指定内容", [])
        }
        var str = JSON.stringify(person) //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
        fs.writeFile("./dataBase/db.json", str, function (err) {
          if (err) return cb("文件插入错误", [])
          else return cb("", "删除成功")
        })
      })
    })
  },
  // upDateOne(colName, whereObj, upObj, cb) {
  // return new Promise((resolve, reject) => {
  //   fs.readFile("./dataBase/db.json", function (err, data) {
  //     if (err) return cb("文件读取错误", [])
  //     var person = data.toString()
  //     person = JSON.parse(person)
  //     const result = where(person[colName], whereObj)[0]
  //     result = { ...result, ...whereObj }
  //   })
  // })
  // fs.readFile("./dataBase/db.json", function (err, data) {
  //   if (err) resolve(cb("文件读取错误", []))
  //   var person = data.toString() //将二进制的数据转换为字符串
  //   person = JSON.parse(person) //将字符串转换为json对象
  //   const isGeted = person.captcha.findIndex(
  //     v => v["userName"] === userName
  //   )
  //   if (isGeted !== -1) {
  //     person.captcha.splice(isGeted, 1)
  //   }
  //   person.captcha.push(params) //将传来的对象push进数组对象中
  //   var str = JSON.stringify(person) //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
  //   fs.writeFile("./dataBase/db.json", str, function (err) {
  //     if (err) {
  //       reject(err)
  //     } else resolve(captcha)
  //   })
  // })
  // })
  // },
}
