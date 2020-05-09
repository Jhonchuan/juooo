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
  CHANGE_INFO(payload) {
    return {
      type: LoginActionType.CHANGE_INFO,
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
  submit(e, userName, captchaCode, img, isEmail) {
    return async dispatch => {
      if (e.target.className === "login__cnt__pwd__btn__login_active") {
        const type = isEmail ? "email" : "mobile"
        const data = await axios.get("/api/sendMobileLoginSms", {
          params: {
            mobile: userName,
            captcha: captchaCode,
            gid: this.captchaCode,
          },
        })
        if (data.ok === 1) {
          window.location.href = `/passport/verify?step=1&type=${type}&userName=${userName}&gid=${this.captchaCode}`
        } else {
          document.querySelector(".error_msg").innerHTML = data.msg
          this.getCapcha(img)
          window.location.href = `/passport/verify?step=1&type=${type}&userName=${userName}&gid=${this.captchaCode}`
        }
      }
    }
  },
  // 获得手机验证码
  getPhoneCapcha(type, userName) {
    return async dispatch => {
      const data = await axios.get("/api/getPhoneCode", {
        params: {
          userName,
          type,
        },
      })
      dispatch(this.GET_PHONE_CAPTCHA(data.phoneCaptcha))
      localStorage.userName = userName
      localStorage.type = type
      const exp = new Date()
      exp.setTime(exp.getTime() + 60 * 1000)
      const addTime = Date.now() - 0 + 60 * 1000
      document.cookie = "c_end=" + addTime + ";expires=" + exp.toGMTString()
    }
  },
  // 返回手机验证码
  sendPhoneCode(step, type, userName, phoneCaptcha) {
    return async dispatch => {
      const data = await axios.get("/api/sendPhoneCode", {
        params: { step, type, userName, phoneCaptcha },
      })
      if (data.token) {
        document.cookie = `juooo_token=${data.token};path=/`
        document.cookie = `userName=${userName};path=/`
      }
      if (data.ok === 1) {
        //手机注册成功 设置token，跳转首页
        window.location.href = "/"
      } else if (data.ok === 2) {
        // 重置token，跳转重新设置密码界面，邮箱注册成功
        window.location.href = "/passport/setPassWord"
      } else if (data.ok === 4) {
        // 登陆成功，跳转原页面
        window.location.href = localStorage.returnUrl || "/"
      } else if (data.ok === -1) {
        return data
      }
    }
  },
  // 更改用户信息（密码）
  changeInfo(infoToChange) {
    return async dispatch => {
      const info = { userName: localStorage.userName, type: localStorage.type }
      const data = await axios.put("/api/changeInfo", { infoToChange, info })
      if (data.ok === 1) window.location.href = localStorage.returnUrl || "/"
    }
  },
}
