import React, { Component } from "react"
import axios from "axios"
export default class ResetPassword extends Component {
  constructor() {
    super()
    this.state = {
      img: null,
    }
    this.capcha = null
    this.userName = null
    this.capchaImg = null
  }
  onChange() {
    const button = document.querySelector(".reset_password_btn")
    const mail = new RegExp(
      "^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
    )
    const mobNum = /^1[3456789]\d{9}$/
    if (
      (mail.test(this.userName.value) || mobNum.test(this.userName.value)) &&
      this.capcha.value
    ) {
      button.className = "reset_password_btn"
    } else {
      button.className = "reset_password_btn disabled"
    }
  }
  async getCapcha() {
    const { codeData, captchaCode } = await axios.get("/api/get-img-verify")
    document.cookie = `capCode=${captchaCode}`
    this.capchaImg.innerHTML = codeData.img
  }
  async next() {
    const button = document.querySelector(".disabled")
    if (!button) {
      const cookieArr = document.cookie.split(";")
      const gid = cookieArr
        .find(v => RegExp("capCode=").test(v))
        .split("capCode=")
        .join("")
      const data = await axios.get("/api/sendMobileLoginSms", {
        params: {
          userName: this.userName.value,
          vertifyCode: this.capcha.value,
          gid,
        },
      })
      if (data.ok === 1) {
        window.location.href = `/passport/verify?userName=${this.userName.value}&type=${data.userType}&resetToken=${data.reset_token}&captcha=${this.capcha.value}`
      } else {
        this.capchaImg.nextSibling.innerHTML = data.msg
        this.getCapcha()
      }
      window.location.href = `/passport/verify?type=moblile&userName=${this.userName.value}&resetToken=${data.reset_token}&captcha=${this.capcha.value}`
    }
  }
  async componentDidMount() {
    this.getCapcha()
  }
  render() {
    return (
      <div className="container">
        <i
          className="iconfont icon-left"
          onClick={() => (window.location.href = localStorage.returnUrl || "")}
        ></i>
        <div className="label">找回密码</div>
        <input
          type="text"
          placeholder="请输入手机号/邮箱"
          className="account"
          ref={e => (this.userName = e)}
          onInput={this.onChange.bind(this)}
        />
        <div className="divider"></div>
        <div className="captcha-wrapper">
          <input
            type="text"
            placeholder="请输入图形验证码"
            className="captcha"
            ref={e => (this.capcha = e)}
            onInput={this.onChange.bind(this)}
          />
          <div
            className="captcha-img"
            onClick={this.getCapcha.bind(this)}
            ref={e => (this.capchaImg = e)}
          ></div>
          <div className="error_msg"></div>
        </div>
        <div className="divider"></div>
        <div className="next-wrapper">
          <button
            className="reset_password_btn disabled"
            onClick={this.next.bind(this)}
          >
            下一步
          </button>
        </div>
      </div>
    )
  }
}
