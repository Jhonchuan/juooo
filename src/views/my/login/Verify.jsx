import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import LoginCreator from "../../../store/actionCreator/Login/index"
import Dialog from "../../../components/common/Dialog"
import "../../../assets/style/login/resetPassword.css"
class Verify extends Component {
  constructor() {
    super()
    this.state = {
      isDialog: false,
      remainder: 0,
      userName: "",
      type: "",
    }

    this.spacing = 60 //再次获取验证码的初始间隔秒数
    this.remainder = 0 //距离再次获取验证码的剩余秒数
    this.timer = null //定时器
    this.arr = []
    this.hrefArr = []
  }
  async checking(e) {
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
    if (/^(\w)$/.test(e.target.value)) {
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
        this.hrefArr = window.location.href.split("?")[1].split("&")
        const step = this.hrefArr[0].split("=")[1]
        const data = await this.props.sendPhoneCode(
          step,
          this.state.type,
          this.state.userName,
          this.arr.join("")
        )
        if (data.ok === -1) {
          document.querySelector(".error_msg").innerHTML = "验证码错误"
        }
      }
    }
  }
  doTimer() {
    //执行倒计时
    const addTime = document.cookie
      .split(";")
      .map(v => v.split("="))
      .find(v => v[0].trim() === "c_end")[1]
    this.timer = setInterval(() => {
      this.setState(
        { remainder: Math.ceil((addTime - Date.now()) / 1000) },
        () => {
          if (this.state.remainder <= 0) {
            clearInterval(this.timer)
            this.timer = null
          }
        }
      )
    }, 1000)
  }
  closeDialog() {
    document.querySelector(".code").focus()
    this.doTimer()
  }
  getCode() {
    this.hrefArr = window.location.href.split("?")[1].split("&")
    this.setState(
      {
        userName: this.hrefArr[2].split("=")[1],
        type: this.hrefArr[1].split("=")[1],
      },
      () => {
        if (!/(c_end)/.test(document.cookie)) {
          this.props.getPhoneCapcha(
            this.state.type,
            this.state.userName,
            this.props.phoneCaptcha
          )
        } else {
          this.doTimer()
        }
      }
    )
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.phoneCaptcha !== this.props.phoneCaptcha) {
      this.setState({ isDialog: true })
    }
    console.log(this.props.info)
  }
  componentWillMount() {
    this.getCode()
  }
  componentDidMount() {
    this.hrefArr = window.location.href.split("?")[1].split("&")
    const user_name = this.hrefArr[2].split("=")[1]
    if (this.hrefArr[1] === "type=email") {
      document.querySelector(".tips").innerHTML =
        "验证码已发送到邮箱" + user_name
    } else if (this.hrefArr[1] === "type=mobile") {
      document.querySelector(".tips").innerHTML =
        "验证码已发送到手机" + user_name
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
        <div className="error_msg vertify"></div>
        {this.state.remainder ? (
          <div className="retry count-down">
            {this.state.remainder}s后重新获取验证码
          </div>
        ) : (
          <div className="retry" onClick={this.getCode.bind(this)}>
            重新获取验证码
          </div>
        )}
        {this.state.isDialog && this.props.phoneCaptcha ? (
          <Dialog
            handleClick={() => this.setState({ isDialog: false })}
            type="confirm"
            closeFuction={this.closeDialog.bind(this)}
          >
            您的验证码为：{this.props.phoneCaptcha},验证码五分钟内有效
          </Dialog>
        ) : null}
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
export default connect(mapStateToProps, mapDispatchToProps)(Verify)
