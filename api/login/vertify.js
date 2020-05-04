const svgCaptcha = require("svg-captcha")
const md5 = require("md5-node")
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
}
