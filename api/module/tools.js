const jwt = require("jwt-simple")
const KEY = ")(*&)(*&)(*)((*&(*"
module.exports = {
  encode(payload) {
    return jwt.encode(
      {
        ...payload,
        ...{
          createTime: Date.now(),
        },
      },
      KEY
    )
  },
  decode(token) {
    try {
      const info = jwt.decode(token, KEY)
      // const times = 60*60*1000;
      const times = 60 * 60 * 1000
      if (Date.now() - info.createTime > times) {
        return {
          ok: 2,
          msg: "token过期啦",
        }
      } else {
        return {
          ok: 3,
          msg: "token正常",
          info,
        }
      }
    } catch (e) {
      return {
        ok: 1,
        msg: "token解析失败",
      }
    }
  },
}
