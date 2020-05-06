import React, { Component } from "react"
import "../assets/style/vip/index.css"
// 引入图片
import right_arrow from "../assets/img/vip/right_arrow.png"
import vipInfo_bg from "../assets/img/vip/vip_info.png"
export default class Vip extends Component {
  render() {
    return (
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
                      <div
                        className="right-cell right-list__cell"
                        style={{ marginRight: "0.4rem" }}
                      >
                        <div className="right-cell__icon right-cell__icon--prior-buy"></div>
                        <div className="right-cell__name">优先购票</div>
                      </div>
                      <div
                        className="right-cell right-list__cell"
                        style={{ marginRight: "0.4rem" }}
                      >
                        <div className="right-cell__icon right-cell__icon--prior-buy"></div>
                        <div className="right-cell__name">优先购票</div>
                      </div>
                      <div
                        className="right-cell right-list__cell"
                        style={{ marginRight: "0.4rem" }}
                      >
                        <div className="right-cell__icon right-cell__icon--prior-buy"></div>
                        <div className="right-cell__name">优先购票</div>
                      </div>
                      <div
                        className="right-cell right-list__cell"
                        style={{ marginRight: "0.4rem" }}
                      >
                        <div className="right-cell__icon right-cell__icon--prior-buy"></div>
                        <div className="right-cell__name">优先购票</div>
                      </div>
                      <div
                        className="right-cell right-list__cell"
                        style={{ marginRight: "0.4rem" }}
                      >
                        <div className="right-cell__icon right-cell__icon--prior-buy"></div>
                        <div className="right-cell__name">优先购票</div>
                      </div>
                      <div
                        className="right-cell right-list__cell"
                        style={{ marginRight: "0.4rem" }}
                      >
                        <div className="right-cell__icon right-cell__icon--prior-buy"></div>
                        <div className="right-cell__name">优先购票</div>
                      </div>
                      <div
                        className="right-cell right-list__cell"
                        style={{ marginRight: "0.4rem" }}
                      >
                        <div className="right-cell__icon right-cell__icon--prior-buy"></div>
                        <div className="right-cell__name">优先购票</div>
                      </div>
                      <div
                        className="right-cell right-list__cell"
                        style={{ marginRight: "0.4rem" }}
                      >
                        <div className="right-cell__icon right-cell__icon--prior-buy"></div>
                        <div className="right-cell__name">优先购票</div>
                      </div>
                      <div
                        className="right-cell right-list__cell"
                        style={{ marginRight: "0.4rem" }}
                      >
                        <div className="right-cell__icon right-cell__icon--prior-buy"></div>
                        <div className="right-cell__name">优先购票</div>
                      </div>
                      <div
                        className="right-cell right-list__cell"
                        style={{ marginRight: "0.4rem" }}
                      >
                        <div className="right-cell__icon right-cell__icon--prior-buy"></div>
                        <div className="right-cell__name">优先购票</div>
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
                  <span className="watch-citys__block__arrow__label">
                    请选择城市
                  </span>
                  <span className="watch-citys__block__arrow__icon"></span>
                </div>
              </div>
            </div>
            <div className="payment-mode">
              <div className="payment-mode__title">
                <h3 className="payment-mode__title__h3">支付方式</h3>
              </div>
              <div className="payment-mode__list">
                <div className="payment-mode__box"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}
