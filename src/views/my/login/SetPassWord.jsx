import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import LoginCreator from "../../../store/actionCreator/Login/index"
class SetPassWord extends Component {
  constructor() {
    super()
    this.password = null
  }
  onChange() {
    const button = document.querySelector(".reset_password_btn")
    const passReg = new RegExp("^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$")
    if (passReg.test(this.password.value)) {
      button.className = "reset_password_btn"
    } else {
      button.className = "reset_password_btn disabled"
    }
  }
  next() {
    // this.props.changeInfo({ password: this.password.value })
  }
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
            onClick={() =>
              this.props.changeInfo({ password: this.password.value })
            }
          >
            下一步
          </button>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    phoneCaptcha: state.login.phoneCaptcha,
    info: state.login.info,
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(LoginCreator, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SetPassWord)
