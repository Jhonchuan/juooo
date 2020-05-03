import React, { Component } from "react"
import "../../../assets/style/login/resetPassword.css"
export default class Verify extends Component {
  constructor() {
    super()
    this.state = {}
    this.arr = []
  }
  checking(e) {
    const inps = document.querySelectorAll(".code")
    if (e.keyCode === 8) {
      for (let i = 0; i < inps.length; i++) {
        if (e.target === inps[i]) {
          if (
            !this.arr[i] &&
            e.target !==
              document.querySelector(".captchaPhone").firstElementChild
          ) {
            e.target.previousSibling.focus()
          }
          this.arr[i] = null
        }
      }
    }
    if (/^(\d)$/.test(e.target.value)) {
      if (
        e.target !== document.querySelector(".captchaPhone").lastElementChild
      ) {
        e.target.nextSibling.focus()
      }
      for (let i = 0; i < inps.length; i++) {
        if (e.target === inps[i]) {
          this.arr[i] = e.target.value
        }
      }
    } else {
      e.target.value = ""
    }
    if (this.arr.length === 4) {
      if (this.arr.every(v => (v ? true : false))) {
        console.log("可以发送验证码了")
      }
    }
  }
  componentDidMount() {
    const hrefArr = window.location.href.split("?")[1].split("&")
    if (hrefArr[0] === "type=email") {
      document.querySelector(".tips").innerHTML =
        "验证码已发送到邮箱" + hrefArr[1].split("=")[1]
    } else {
      document.querySelector(".tips").innerHTML =
        "验证码已发送到手机" + hrefArr[1].split("=")[1]
    }
  }
  render() {
    return (
      <div className="container">
        <i
          className="iconfont icon-left"
          onClick={() => (window.location.href = localStorage.returnUrl || "")}
        ></i>
        <div className="label">验证码</div>
        <div className="tips"></div>
        <div className="captchaPhone">
          <input
            type="tel"
            className="code"
            autoFocus
            onKeyUp={e => this.checking.call(this, e)}
          />
          <input
            type="tel"
            className="code"
            onKeyUp={e => this.checking.call(this, e)}
          />
          <input
            type="tel"
            className="code"
            onKeyUp={e => this.checking.call(this, e)}
          />
          <input
            type="tel"
            className="code"
            onKeyUp={e => this.checking.call(this, e)}
          />
        </div>
      </div>
    )
  }
  //注册 https://m.juooo.com/Passport/verify?step=1&type=mobile&user_name=18753880131&captcha=4887&gid=154d2cd0-8d54-11ea-b098-415a8cf6b69d
}
