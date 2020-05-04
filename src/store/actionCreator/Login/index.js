import LoginActionType from "../../actionType/Login/index"
import axios from "axios"
export default {
  CHANGE_IMG_CAPTCHA(payload) {
    return {
      type: LoginActionType.CHANGE_IMG_CAPTCHA,
      payload,
    }
  },
  GET_PHONE_CAPTCHA(payload) {
    return {
      type: LoginActionType.GET_PHONE_CAPTCHA,
      payload,
    }
  },
  // 获取图形验证码
  getCapcha(imgPack) {
    return async dispatch => {
      const { codeData, captchaCode } = await axios.get("/api/get-img-verify")
      imgPack.innerHTML = codeData.img
      dispatch(this.CHANGE_IMG_CAPTCHA(captchaCode))
    }
  },
  // 提交图形验证，获得手机验证
  submit(e, phone, captchaCode, img, isEmail) {
    return async () => {
      if (e.target.className === "login__cnt__pwd__btn__login_active") {
        const type = isEmail ? "email" : "mobile"
        const data = await axios.get("/api/sendMobileLoginSms", {
          params: {
            mobile: phone,
            captcha: captchaCode,
            gid: this.captchaCode,
          },
        })
        if (data.ok === 1) {
          document.cookie = `token=${data.token}`
          window.location.href = `/passport/verify?step=1&type=${type}&userName=${phone}&gid=${this.captchaCode}`
        } else {
          document.querySelector(".error_msg").innerHTML = data.msg
          this.getCapcha(img)
        }
      }
    }
  },
  getPhoneCapcha(type, userName) {
    return async dispatch => {
      const data = await axios.get("/api/getPhoneCode", {
        params: {
          userName,
          type,
        },
      })
      dispatch(this.GET_PHONE_CAPTCHA(data.phoneCaptcha))
      const exp = new Date()
      exp.setTime(exp.getTime() + 60 * 1000)
      const addTime = Date.now() - 0 + 60 * 1000
      console.log(exp.toGMTString(), new Date().toGMTString())
      document.cookie = "c_end=" + addTime + ";expires=" + exp.toGMTString()
    }
  },
  sendPhoneCode(type, userName, phoneCaptcha) {
    return async dispatch => {
      const data = await axios.get("/api/sendPhoneCode", {
        params: { type, userName, phoneCaptcha },
      })
      if (data.token) document.cookie = `token=${data.token}`
      if (data.ok === 1) {
        //注册成功 设置token，跳转首页
        window.location.href = "/"
      } else if (data.ok === 2) {
        // 重置token，跳转重新设置密码界面
      } else if (data.ok === 3) {
        // 设置token，跳转login界面，验证邮箱
      } else if (data.ok === 4) {
        // 登陆成功，跳转原页面
        window.location.href = localStorage.returnUrl || "/"
      } else if (data.ok === -1) {
        alert(data.msg)
      }
    }
  },
}
