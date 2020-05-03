import React, { Component } from 'react'
import "../../assets/style/my/my.css"
// import ""

export default class Myjuooo extends Component {
    render() {
        return (
            <div className="my-mine">
                <div className="my-minebody">
                    <div className="my-mine-info mine-info">
                        <div className="my-mine-info__icon">
                            <a href=""><i className="iconfont icon-sangedian"></i></a>
                        </div>
                        <div className="mine-info__main">
                            <div className="mine-info__main__head">
                                <div className="mine-info__main__head__pic mine-info__main__head__pic--no">
                                    <img src="https://m.juooo.com/static/img/logo-user.8413cbf.png" alt="" />
                                </div>
                                <span className="mine-info__main__head__name mine-info__main__head__login">登录/注册</span>
                                <span className="mine-info__main__head__uid">请点击登录<i className="iconfont icon-left"></i></span>
                            </div>
                            <div className="mine-info__main__label">
                                <p className="mine-info__main__label__name mine-info__main__label__name--no">
                                    普通会员
                                </p>
                            </div>
                            <div className="mine-info__main__cnt">
                                <div className="mine-info__main__cnt__item mine-info__main__cnt__item--disabled">
                                    <p className="mine-info__main__cnt__item__num">0</p>
                                    <p className="mine-info__main__cnt__item__name">账户余额</p>
                                </div>
                                <div className="mine-info__main__cnt__item mine-info__main__cnt__item--disabled">
                                    <p className="mine-info__main__cnt__item__num">0</p>
                                    <p className="mine-info__main__cnt__item__name">积分</p>
                                </div>
                                <div className="mine-info__main__cnt__item mine-info__main__cnt__item--disabled">
                                    <p className="mine-info__main__cnt__item__num">0</p>
                                    <p className="mine-info__main__cnt__item__name">优惠券</p>
                                </div>
                                <a href="/plus/index" className="mine-info__main__cnt__item mine-info__main__cnt__plus">
                                    <p className="mine-info__main__cnt__item__num mine-info__main__cnt__item__num--no">立即开通</p>
                                    <p className="mine-info__main__cnt__item__name">橙PLUS卡</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <a className="my-mine-vip" href="">
                        <img src="https://m.juooo.com/static/img/ad.411f5e6.png" alt="" />
                    </a>
                    <div className="my-mine-setting">
                        <ul className="mine-setting__list">
                            <li className="mine-setting__list__item">
                                <div className="mine-setting__list__item--link">
                                    <i className="icon icon-order"></i>
                                    <p className="mine-setting__list__item__name">我得订单</p>
                                </div>
                            </li>
                            <li className="mine-setting__list__item">
                                <div className="mine-setting__list__item--link">
                                    <i className="icon icon-ticketholder"></i>
                                    <p className="mine-setting__list__item__name">我的票夹</p>
                                </div>
                            </li>
                            <li className="mine-setting__list__item">
                                <div className="mine-setting__list__item--link">
                                    <i className="icon icon-cardpackage"></i>
                                    <p className="mine-setting__list__item__name">我的卡包</p>
                                </div>
                            </li>
                        </ul>
                        <ul className="mine-setting__list">
                            <li className="mine-setting__list__item">
                                <div className="mine-setting__list__item--link">
                                    <i className="icon icon-people"></i>
                                    <p className="mine-setting__list__item__name">实名售票人</p>
                                </div>
                            </li>
                            <li className="mine-setting__list__item">
                                <div className="mine-setting__list__item--link">
                                    <i className="icon icon-address"></i>
                                    <p className="mine-setting__list__item__name">收货地址</p>
                                </div>
                            </li>
                            <li className="mine-setting__list__item">
                                <div className="mine-setting__list__item--link">
                                    <i className="icon icon-feedback"></i>
                                    <p className="mine-setting__list__item__name">意见反馈</p>
                                </div>
                            </li>
                            {/* ***************** */}
                            <li className="mine-setting__list__item">
                                <a className="mine-setting__list__item--link">
                                    <i className="icon icon-help"></i>
                                    <p className="mine-setting__list__item__name mine-setting__list__item__name--active">客服帮助</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
