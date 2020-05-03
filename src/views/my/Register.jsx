import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import LoginCreator from "../../store/actionCreator/Login/index"
import { Link } from "react-router-dom"
import "../../assets/style/login/register.css"
import Dialog from "../../components/common/Dialog"
import axios from "axios"
// // 引入图片
import login_cnt_logo from "../../assets/img/login/login_logo.png"
import qqImg from "../../assets/img/login/qq.png"
import weiboImg from "../../assets/img/login/weibo.png"
class Register extends Component {
  constructor() {
    super()
    this.state = {
      isDialog: false,
      isEmail: false,
    }
    this.capcha = null
    this.userName = null
    this.capchaImg = null
  }
  onChange() {
    const button =
      document.querySelector(".login__cnt__pwd__btn__login") ||
      document.querySelector(".login__cnt__pwd__btn__login_active")
    const mobNum = /^1[3456789]\d{9}$/
    if (mobNum.test(this.userName.value) && this.capcha.value) {
      button.className = "login__cnt__pwd__btn__login_active"
    } else {
      button.className = "login__cnt__pwd__btn__login"
    }
  }
  async submit(e) {
    if (e.target.className === "login__cnt__pwd__btn__login_active") {
      const data = await axios.get("/api/sendMobileLoginSms", {
        params: {
          mobile: this.userName.value,
          captcha: this.capcha.value,
          gid: this.props.captchaCode,
        },
      })
      if (data.ok === 1) {
        document.cookie = `token=${data.token}`
        window.location.href = `/passport/verify?step=1&type=mobile&userName=${this.userName.value}&gid=${this.props.captchaCode}`
      } else {
        document.querySelector(".error_msg").innerHTML = data.msg
        this.props.getCapcha(this.capchaImg)
      }
    }
  }
  async componentDidMount() {
    this.props.getCapcha(this.capchaImg)
  }
  render() {
    const phone = (
      <div className="logo_cnt_pwd_input">
        <div className="logo_cnt_pwd_input_item">
          <span className="register__prefix">+86</span>
          <input
            ref={e => (this.userName = e)}
            type="text"
            className="logo_cnt_pwd_input_item_text"
            placeholder="请输入手机号"
            onInput={this.onChange.bind(this)}
          />
        </div>
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
            onClick={e => this.props.getCapcha(e.target)}
            ref={e => (this.capchaImg = e)}
          ></div>
          <div className="error_msg"></div>
        </div>
        <p className="register__cnt__code__input__hint">
          未注册的手机号将自动创建会员账号
        </p>
      </div>
    )
    const email = (
      <div className="logo_cnt_pwd_input">
        <div className="logo_cnt_pwd_input_item">
          <span className="register__prefix">+86</span>
          <input
            ref={e => (this.userName = e)}
            type="text"
            className="logo_cnt_pwd_input_item_text"
            placeholder="请输入邮箱"
            onInput={this.onChange.bind(this)}
          />
        </div>
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
            onClick={e => this.props.getCapcha(e.target)}
            ref={e => (this.capchaImg = e)}
          ></div>
          <div className="error_msg"></div>
        </div>
        <p className="register__cnt__code__input__hint">
          未注册的邮箱将自动创建会员账号
        </p>
      </div>
    )
    return (
      <div className="register">
        <div className="head">
          <div className="login_title">
            <i
              className="iconfont icon-left"
              onClick={() =>
                (window.location.href = localStorage.returnUrl || "")
              }
            ></i>
          </div>
        </div>
        <div className="body">
          <div className="login_cnt">
            <img src={login_cnt_logo} alt="" className="login_cnt_logo" />
            <div className="logo_cnt_pwd">
              {this.state.isEmail ? email : phone}
              <div className="login__cnt__pwd__btn">
                <div
                  className="login__cnt__pwd__btn__login"
                  onClick={e => this.submit.call(this, e)}
                >
                  下一步
                </div>
                <div className="login__cnt__pwd__btn__link">
                  <a
                    className="login__cnt__pwd__btn__link--pwd"
                    to="/Passport/resetPassword"
                    onClick={e => {
                      this.setState({ isEmail: true })
                      e.target.innerHTML = ""
                    }}
                  >
                    邮箱注册
                  </a>

                  <Link
                    className="login__cnt__pwd__btn__link--code"
                    to="/Passport/login"
                  >
                    密码登录
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="login_foot">
            <p className="login__foot__title">
              <span className="login__foot__title__txt">其他登陆方式</span>
            </p>
            <div className="login__foot__list">
              <img
                src={qqImg}
                className="login__foot__list__item"
                onClick={() => this.setState({ isDialog: true })}
              />
              <img
                src={weiboImg}
                className="login__foot__list__item"
                onClick={() => this.setState({ isDialog: true })}
              />
            </div>
          </div>
        </div>
        {this.state.isDialog ? (
          <Dialog handleClick={() => this.setState({ isDialog: false })}>
            该登陆方式尚未开放，敬请期待
          </Dialog>
        ) : null}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    captchaCode: state.login.captchaCode,
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(LoginCreator, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)
