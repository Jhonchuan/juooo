import React, { Component } from "react"
export default class SetPassWord extends Component {
  constructor() {
    super()
    this.password = null
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
  next() {}
  render() {
    return (
      <div className="register">
        <i
          className="iconfont icon-left"
          style={{
            fontSize: "0.48rem",
            padding: "0.4rem 0.34667rem",
            display: "inline-block",
            color: "#232323",
            marginTop: "0.4rem",
          }}
          onClick={() => (window.location.href = localStorage.returnUrl || "")}
        ></i>
        <div className="label">设置密码</div>
        <input
          type="text"
          placeholder="请设置6-16位（数字+字母）"
          className="account"
          ref={e => (this.password = e)}
          onInput={this.onChange.bind(this)}
        />
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
