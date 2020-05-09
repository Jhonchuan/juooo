import React, { Component } from "react"
import "../assets/style/vip/index.css"
import CityList from "../components/common/CityList"
import Dialog from "../components/common/Dialog"
// 引入图片
import right_arrow from "../assets/img/vip/right_arrow.png"
import vipInfo_bg from "../assets/img/vip/vip_info.png"
import left_arrow from "../assets/img/vip/left_arrow.png"
import weixin from "../assets/img/vip/weixin.png"
import zhifubao from "../assets/img/vip/zhipng.png"
import pay from "../assets/img/vip/pay.png"
export default class Vip extends Component {
  constructor() {
    super()
    this.state = {
      isCity: false,
      isDialog: false,
      isConfirm: false,
    }
    this.name = 0
    this.vipInfo = [
      {
        benefits_name: "优先购票",
        benefits_icon: "prior-buy",
      },
      {
        benefits_name: "专属票价",
        benefits_icon: "price",
      },
      {
        benefits_name: "专享折扣",
        benefits_icon: "discount",
      },
      {
        benefits_name: "专享券",
        benefits_icon: "coupon",
      },
      {
        benefits_name: "全场包邮",
        benefits_icon: "free-shipping",
      },
      {
        benefits_name: "双倍积分",
        benefits_icon: "double-points",
      },
      {
        benefits_name: "赠观演券",
        benefits_icon: "free-ticket",
      },
      {
        benefits_name: "明星活动",
        benefits_icon: "activity",
      },
      {
        benefits_name: "免费期刊",
        benefits_icon: "periodical",
      },
      {
        benefits_name: "生日专享",
        benefits_icon: "birthday",
      },
    ]
  }
  chooseCity = cityName => {
    document.querySelector(
      ".watch-citys__block__arrow__label"
    ).innerHTML = cityName
  }
  payStyle(e) {
    const payModes = document.querySelectorAll(
      ".payment-mode__list__checkout__icon"
    )
    for (let i = 0; i < payModes.length; i++) {
      payModes[i].className = "payment-mode__list__checkout__icon juooo-success"
    }
    e.target.className =
      "payment-mode__list__checkout__icon juooo-success juooo-checkout"
  }
  render() {
    const num = 0
    const vip = (
      <div className="vip-buy-wrap">
        <div className="vip-buy">
          <section className="vip-buy__section">
            <header className="head_nav header-media">
              <span
                className="head_icon back_icon"
                style={{ backgroundImage: `url(${right_arrow})` }}
              ></span>
              <h3 className="vip_title text-single">开通vip+会员</h3>
            </header>
            <div
              className="vip-info"
              style={{ backgroundImage: `url(${vipInfo_bg})` }}
            >
              <section className="vip-info__block">
                <h3 className="vip-info__block__title">VIP+尊享10大权益</h3>
                <div className="vip-info__block__equity">
                  <div className="right-list-wrapper vip-info__block__equity__wrap">
                    <div className="right-list">
                      {this.vipInfo.map((v, i) => {
                        return (
                          <div
                            className="right-cell right-list__cell"
                            style={{ marginRight: "0.4rem" }}
                            key={i}
                          >
                            <div
                              className={`right-cell__icon right-cell__icon--${v.benefits_icon}`}
                            ></div>
                            <div className="right-cell__name">
                              {v.benefits_name}
                            </div>
                          </div>
                        )
                      })}
                      <div
                        className="right-cell right-list__cell"
                        style={{ marginRight: "0.4rem" }}
                      >
                        <div className="right-cell__icon right-cell__icon--more"></div>
                        <div className="right-cell__name">敬请期待</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="vip-info__block__sub">
                  <div className="vip-info__block__sub__date">
                    <span className="vip-info__block__sub__date__text">
                      VIP+会员
                    </span>
                    <span className="vip-info__block__sub__date__unit">月</span>
                  </div>
                  <div className="vip-info__block__sub__price">￥99</div>
                </div>
                <p className="vip-info__block__valid">
                  有效期
                  <span className="c_ff6">15</span>月
                </p>
              </section>
            </div>
            <div className="watch-citys">
              <div className="watch-citys__block">
                <h3 className="watch-citys__block__title">常驻城市</h3>
                <div className="watch-citys__block__arrow">
                  <span
                    className="watch-citys__block__arrow__label"
                    onClick={() => this.setState({ isCity: true })}
                  >
                    请选择城市
                  </span>
                  <span
                    className="watch-citys__block__arrow__icon"
                    style={{ backgroundImage: `url(${left_arrow})` }}
                  ></span>
                </div>
              </div>
            </div>
            <div className="payment-mode">
              <div className="payment-mode__title">
                <h3 className="payment-mode__title__h3">支付方式</h3>
              </div>
              <div className="payment-mode__list">
                <div className="payment-mode__box">
                  <div className="payment-mode__list__info">
                    <div
                      className="payment-mode__list__info__icon wechat--icon"
                      style={{ backgroundImage: `url(${weixin})` }}
                    ></div>
                    <div className="payment-mode__list__info__payname">
                      <h3 className="payment-mode__list__info__payname__title">
                        微信支付
                      </h3>
                    </div>
                  </div>
                  <div className="payment-mode__list__checkout">
                    <span
                      className="payment-mode__list__checkout__icon juooo-success juooo-checkout"
                      onClick={e => this.payStyle.call(this, e)}
                    ></span>
                  </div>
                </div>
              </div>
              <div className="payment-mode__list">
                <div className="payment-mode__box">
                  <div className="payment-mode__list__info">
                    <div
                      className="payment-mode__list__info__icon wechat--icon"
                      style={{ backgroundImage: `url(${zhifubao})` }}
                    ></div>
                    <div className="payment-mode__list__info__payname">
                      <h3 className="payment-mode__list__info__payname__title">
                        支付宝网页支付
                      </h3>
                    </div>
                  </div>
                  <div className="payment-mode__list__checkout">
                    <span
                      className="payment-mode__list__checkout__icon juooo-success"
                      onClick={e => this.payStyle.call(this, e)}
                    ></span>
                  </div>
                </div>
              </div>
              <div className="payment-mode__list">
                <div className="payment-mode__box">
                  <div className="payment-mode__list__info">
                    <div
                      className="payment-mode__list__info__icon wechat--icon"
                      style={{ backgroundImage: `url(${pay})` }}
                    ></div>
                    <div className="payment-mode__list__info__payname">
                      <h3 className="payment-mode__list__info__payname__title">
                        乐卡分期
                      </h3>
                    </div>
                  </div>
                  <div className="payment-mode__list__checkout">
                    <span className="payment-mode__list__checkout__tip">
                      新用户先消费，后还款
                    </span>
                    <span
                      className="payment-mode__list__checkout__icon juooo-success"
                      onClick={e => this.payStyle.call(this, e)}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
            <footer className="foot foot-media">
              <div className="foot-agree">
                <span className="foot-agree__label">购买即视为同意</span>
                <span className="foot-agree__text">
                  《聚橙网VIP+会员服务协议》
                </span>
              </div>
              <p className="foot__tip">
                VIP+会员服务一经开通不支持取消/退款，敬请谅解
              </p>
            </footer>
            <footer className="foot foot-media foott">
              <div className="foot-btn">
                <div className="foot-btn__text">
                  <span className="foot-btn__text__label">应付：</span>
                  <span className="foot-btn__text__payment">¥99.00</span>
                </div>
                <button
                  className="juooo-btn juooo-btn--primary"
                  onClick={() => this.setState({ isDialog: true })}
                >
                  立即开通
                </button>
              </div>
            </footer>
          </section>
        </div>
        {this.state.isCity ? (
          <CityList
            close={() => this.setState({ isCity: false })}
            confirm={this.chooseCity}
          ></CityList>
        ) : null}
        {this.state.isDialog ? (
          <Dialog
            type="alert"
            closeFuction={() => this.setState({ isConfirm: true })}
            handleClick={() => this.setState({ isDialog: false })}
          >
            是否立即提交信息？
          </Dialog>
        ) : null}
        {this.state.isConfirm ? (
          <Dialog
            type="confirm"
            closeFuction={this.closeConfirm}
            handleClick={() => this.setState({ isConfirm: false })}
          >
            支付已完成
          </Dialog>
        ) : null}
      </div>
    )
    return vip
  }
}
