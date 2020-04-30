import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../../assets/style/login/index.css"
import login_cnt_logo from "../../assets/img/login/login_logo.png"
import login_cnt_delete from "../../assets/img/login/delete.png"
import eyeClose from "../../assets/img/login/close.png"
import eyeOpen from "../../assets/img/login/open.png"
import login_cnt_delete_img from "../../assets/img/login/delete.png"
import qqImg from "../../assets/img/login/qq.png"
import weiboImg from "../../assets/img/login/weibo.png"

export default class Login extends Component {
  constructor() {
    super()
    this.eyeClose = {
      backgroundImage: `url(${eyeClose})`,
    }
    this.eyeOpen = {
      backgroundImage: `url(${eyeOpen})`,
    }
  }
  render() {
    return (
      <div className="login">
        <div className="head">
          <div className="login_title">
            <i
              className="iconfont icon-left"
              onClick={() => window.history.go(-1)}
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
                    type="text"
                    className="logo_cnt_pwd_input_item_text"
                    placeholder="请输入手机号/邮箱"
                  />
                  <img
                    src={login_cnt_delete_img}
                    alt=""
                    className="login_cnt_delete"
                  />
                </div>
                <div className="logo_cnt_pwd_input_item">
                  <input
                    type="text"
                    className="logo_cnt_pwd_input_item_text"
                    placeholder="请输入密码"
                  />
                  <img
                    src={login_cnt_delete}
                    alt=""
                    className="login_cnt_delete"
                  />
                  <span
                    className="login__cnt__pwd__input__item__eye login__cnt__pwd__input__item__eye"
                    style={this.eyeClose}
                  ></span>
                  <span
                    className="login__cnt__pwd__input__item__eye login__cnt__pwd__input__item__eye--open"
                    style={this.eyeOpen}
                  ></span>
                </div>
              </div>
              <div className="login__cnt__pwd__btn">
                <div className="login__cnt__pwd__btn__login">登录</div>
                <div className="login__cnt__pwd__btn__link">
                  <Link className="login__cnt__pwd__btn__link--pwd" to="/">
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
              <img src={qqImg} className="login__foot__list__item" />
              <img src={weiboImg} className="login__foot__list__item" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
