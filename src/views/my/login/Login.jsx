import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import "../../../assets/style/login/index.css"
import Dialog from "../../../components/common/Dialog"
// 引入图片
import login_cnt_logo from "../../../assets/img/login/login_logo.png"
import eyeClose from "../../../assets/img/login/close.png"
import eyeOpen from "../../../assets/img/login/open.png"
import login_cnt_delete_img from "../../../assets/img/login/delete.png"
import qqImg from "../../../assets/img/login/qq.png"
import weiboImg from "../../../assets/img/login/weibo.png"

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      isDialog: false,
      isEyeOpen: false,
      isConfirm: false,
    }

    this.password = null
    this.userName = null
  }
  onChange() {
    const button =
      document.querySelector(".login__cnt__pwd__btn__login") ||
      document.querySelector(".login__cnt__pwd__btn__login_active")
    const mail = new RegExp(
      "^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
    )
    const mobNum = /^1[3456789]\d{9}$/
    if (
      (mail.test(this.userName.value) || mobNum.test(this.userName.value)) &&
      this.password.value
    ) {
      button.className = "login__cnt__pwd__btn__login_active"
    } else {
      button.className = "login__cnt__pwd__btn__login"
    }
  }
  async submit(e) {
    if (e.target.className === "login__cnt__pwd__btn__login_active") {
      const data = await axios.get("/api/login", {
        params: {
          userName: this.userName.value,
          password: this.password.value,
        },
      })
      if (data.ok === 1) {
        window.location.href = localStorage.returnUrl || ""
        document.cookie = `token=${data.token}`
      } else this.setState({ isConfirm: true })
    }
  }
  render() {
    return (
      <div className="login">
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
              <div className="logo_cnt_pwd_input">
                <div className="logo_cnt_pwd_input_item">
                  <input
                    ref={e => (this.userName = e)}
                    type="text"
                    className="logo_cnt_pwd_input_item_text"
                    placeholder="请输入手机号/邮箱"
                    onKeyUp={e =>
                      e.target.value
                        ? (e.target.nextElementSibling.style.display = "block")
                        : (e.target.nextElementSibling.style.display = "none")
                    }
                    onInput={this.onChange.bind(this)}
                  />
                  <img
                    src={login_cnt_delete_img}
                    alt=""
                    className="login_cnt_delete"
                    style={{ display: "none" }}
                    onClick={e => {
                      e.target.previousElementSibling.value = ""
                      e.target.style.display = "none"
                    }}
                  />
                </div>
                <div className="logo_cnt_pwd_input_item">
                  <input
                    type="password"
                    className="logo_cnt_pwd_input_item_text"
                    placeholder="请输入密码"
                    ref={e => (this.password = e)}
                    onKeyUp={e =>
                      e.target.value
                        ? (e.target.nextElementSibling.style.display = "block")
                        : (e.target.nextElementSibling.style.display = "none")
                    }
                    onInput={this.onChange.bind(this)}
                  />
                  <img
                    src={login_cnt_delete_img}
                    alt=""
                    className="login_cnt_delete"
                    style={{ display: "none" }}
                    onClick={e => {
                      e.target.previousElementSibling.value = ""
                      e.target.style.display = "none"
                    }}
                  />
                  {this.state.isEyeOpen ? (
                    <span
                      className="login__cnt__pwd__input__item__eye login__cnt__pwd__input__item__eye--open"
                      style={{ backgroundImage: `url(${eyeOpen})` }}
                      onClick={() =>
                        this.setState({ isEyeOpen: false }, () => {
                          this.password.type = "password"
                        })
                      }
                    ></span>
                  ) : (
                    <span
                      className="login__cnt__pwd__input__item__eye login__cnt__pwd__input__item__eye"
                      style={{ backgroundImage: `url(${eyeClose})` }}
                      onClick={() =>
                        this.setState({ isEyeOpen: true }, () => {
                          this.password.type = "text"
                        })
                      }
                    ></span>
                  )}
                </div>
              </div>
              <div className="login__cnt__pwd__btn">
                <div
                  className="login__cnt__pwd__btn__login"
                  onClick={e => this.submit.call(this, e)}
                >
                  登录
                </div>
                <div className="login__cnt__pwd__btn__link">
                  <Link
                    className="login__cnt__pwd__btn__link--pwd"
                    to="/Passport/resetPassword"
                  >
                    忘记密码
                  </Link>
                  <Link
                    className="login__cnt__pwd__btn__link--code"
                    to="/Passport/register"
                  >
                    验证码登录/注册
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
        {this.state.isConfirm ? (
          <Dialog
            type="confirm"
            closeFuction={() => {
              this.userName.value = ""
              this.password.value = ""
            }}
            handleClick={() => this.setState({ isConfirm: false })}
          >
            用户名或密码错误
          </Dialog>
        ) : null}
      </div>
    )
  }
}
