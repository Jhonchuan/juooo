import React, { Component } from 'react'
import CommonHeader from "../components/common/CommonHeader"
import "../assets/style/plus/plus.css"
export default class Plus extends Component {
    render() {
        return (
            <div className="plus">
                <CommonHeader title={"橙PLUS卡"}></CommonHeader>
                <div className="plus-body">
                    <div className="plus__no">
                        <div className="plus__no__info">
                            <div className="plus__no__info__center">
                                <p className="plus__no__info__center__type">橙PLUS卡</p>
                                <div className="plus__no__info__center__cnt">
                                    <span className="plus__no__info__center__cnt--1">开卡999 </span>
                                    <span className="plus__no__info__center__cnt--2">送 </span>
                                    <span className="plus__no__info__center__cnt--3">200 </span>
                                    <span className="plus__no__info__center__cnt--4">储值卡</span>
                                </div>
                                <div className="plus__no__info__center__hint">
                                    <span className="plus__no__info__center__hint--1">赠送VIP+会员</span>
                                    <span className="plus__no__info__center__hint--2">年</span>
                                    <span className="plus__no__info__center__hint--3">尊享10大权益</span>
                                </div>
                                <a href="" className="plus__no__btn__rule">使用规则</a>
                            </div>
                        </div>
                        <div className="plus__no__btn">
                            <button className="ju-button plus__no__btn__open ju-button--gold ju-button--full-round ju-button--large ju-button--round">立即开卡</button>
                        </div>
                        <div className="plus__no__rights">
                            <div className="plus__no__rights__grid">
                                <p className="plus__no__rights__grid__title">VIP+尊享10大权益</p>
                                <div className="right-grid">
                                    <div className="right-grid__row">
                                        <div className="right-cell right-grid__cell">
                                            <div className="right-cell__icon right-cell__icon--prior-buy"></div>
                                            <div className="right-cell__name">优先购票</div>
                                        </div>
                                        <div className="right-cell right-grid__cell">
                                            <div className="right-cell__icon right-cell__icon--price"></div>
                                            <div className="right-cell__name">专属票价</div>
                                        </div>
                                        <div className="right-cell right-grid__cell">
                                            <div className="right-cell__icon right-cell__icon--discount"></div>
                                            <div className="right-cell__name">专享折扣</div>
                                        </div>
                                        <div className="right-cell right-grid__cell">
                                            <div className="right-cell__icon right-cell__icon--coupon"></div>
                                            <div className="right-cell__name">专享券</div>
                                        </div>
                                    </div>
                                    <div className="right-grid__row">
                                        <div className="right-cell right-grid__cell">
                                            <div className="right-cell__icon right-cell__icon--free-shipping"></div>
                                            <div className="right-cell__name">全场包邮</div>
                                        </div>
                                        <div className="right-cell right-grid__cell">
                                            <div className="right-cell__icon right-cell__icon--double-points"></div>
                                            <div className="right-cell__name">双倍积分</div>
                                        </div>
                                        <div className="right-cell right-grid__cell">
                                            <div className="right-cell__icon right-cell__icon--free-ticket"></div>
                                            <div className="right-cell__name">赠观影券</div>
                                        </div>
                                        <div className="right-cell right-grid__cell">
                                            <div className="right-cell__icon right-cell__icon--activity"></div>
                                            <div className="right-cell__name">明星活动</div>
                                        </div>
                                    </div>
                                    <div className="right-grid__row">
                                        <div className="right-cell right-grid__cell">
                                            <div className="right-cell__icon right-cell__icon--periodical"></div>
                                            <div className="right-cell__name">免费期刊</div>
                                        </div>
                                        <div className="right-cell right-grid__cell">
                                            <div className="right-cell__icon right-cell__icon--birthday"></div>
                                            <div className="right-cell__name">生日专享</div>
                                        </div>
                                        <div className="right-cell right-grid__cell">
                                            <div className="right-cell__icon right-cell__icon--more"></div>
                                            <div className="right-cell__name">敬请期待</div>
                                        </div>
                                        <div className="right-cell right-grid__cell">
                                            <div></div>
                                            <div className="right-cell__name"></div>
                                        </div>
                                    </div>
                                </div>
                                <button className="ju-button plus__no__rights__grid__btn ju-button--gold ju-button--full-round ju-button--middle ju-button--round">
                                    立即开通
                                    <span className="plus__no__rights__grid__btn--symbol">￥ </span>
                                    <span className="plus__no__rights__grid__btn--amount">99</span>
                                    /年
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="plus__save">
                        <img className="plus__save__pic" src="https://m.juooo.com/static/img/save.e6e7f69.png" alt=""/>
                    </div>
                    <div className="plus__btn">
                        <div className="plus__btn__txt">
                            <span className="plus__btn__txt__des">开卡限时送 </span>
                            <span className="plus__btn__txt__amount">￥200</span>
                        </div>
                        <button className="ju-button plus__btn__open ju-button--gold ju-button--none-round ju-button--middle ju-button--round">立即开卡</button>
                    </div>
                </div>
            </div>
        )
    }
}
