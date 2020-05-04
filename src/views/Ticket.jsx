import React, {Component} from "react"
import Home from "./Home"
import Comm from "../components/common/CommonHeader.jsx"
import "../assets/style/ticket/index.css"

export default class Ticket extends Component {
    render() {
        return (
            <div>
                <div className="detail-wrapper">
                    <div className="detail">
                        <div className="brief detail__brief">
                            <div className="brief__bg-wrapper">
                                <img src="https://image.juooo.com/group1/M00/03/25/rAoKmV2f3-yADPouAACAMESBbK8067.jpg"
                                     className="brief__bg" alt=""/>
                            </div>
                            <div className="brief__mask"></div>
                            <div className="brief__primary">
                                <div className="brief__primary__fg">
                                    <div className="brief__primary__fg__title">
                                        <span className="brief__primary__fg__title__text">演出详情</span>
                                        <i className="iconfont ju-icon-arrow brief__primary__fg__title__back"></i>
                                        <i className="iconfont ju-icon-share brief__primary__fg__title__share"></i>
                                        <i className="iconfont ju-icon-home brief__primary__fg__title__home"></i>
                                    </div>
                                    <div className="brief__primary__fg__content">
                                        <div className="image brief__primary__fg__content__cover">
                                            <img
                                                src="https://image.juooo.com/group1/M00/03/25/rAoKmV2f3-yADPouAACAMESBbK8067.jpg"
                                                className="ju-image ju-image--fill" alt=""/>
                                        </div>
                                        <div className="brief__primary__fg__content__tag">
                                            <div className="juooo_sponsor">
                                                <i className="logo_i"></i>
                                            </div>
                                        </div>
                                        <div className="brief__primary__fg__content__info">
                                            <div className="brief__primary__fg__content__info__name">
                                                【演出延期】聚橙出品 |百老汇现象级原版音乐剧《来自远方》-深圳站
                                            </div>
                                            <div className="brief__primary__fg__content__info__tag-wrapper">
                                                <div className="brief__primary__fg__content__info__tag"></div>
                                            </div>
                                            <div className="brief__primary__fg__content__info__price">
                                                <span
                                                    className="brief__primary__fg__content__info__price__range">¥280-1080</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="brief__secondary-wrapper">
                                <div className="support support">
                                    <div className="support__item">
                                        <i className="iconfont ju-icon-f-check support__item__check"></i>
                                        <span className="support__item__name">可选座</span>
                                    </div>
                                    <div className="support__item">
                                        <i className="iconfont ju-icon-f-check support__item__check"></i>
                                        <span className="support__item__name">电子票</span>
                                    </div>
                                </div>
                                <div className="brief__secondary">
                                    <div className="brief__secondary__info">
                                        <div className="brief__secondary__info__date-time-wrapper">
                                            <div className="brief__secondary__info__date-time">
                                                <span className="brief__secondary__info__date-time__date">2020.06.12 - 06.14
                                                <i className="iconfont ju-icon-arrow-right brief__secondary__info__date-time__arrow"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="brief__secondary__info__place">
                                            深圳 | 南山文体中心剧院大剧院
                                        </div>
                                        <div className="brief__secondary__info__address">
                                            南山区南山大道南头街62号
                                        </div>
                                    </div>
                                    <div className="brief__secondary__pointer">
                                        <div className="brief__secondary__pointer__img"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-bar detail__bottom-bar">
                                <div className="bottom-bar__client-service">
                                    <img src="data:image/png;base64,iVB
                                  ORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAA
                                  AAb1BMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm
                                  ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm
                                  ZmZmZmZmZmZmZmZmZmbw3/OPAAAAJHRSTlMAH4DvLAySB/Tg05n5rk3opHxiwKCKOhUP4qh0M9jNbli4hSkY
                                  6Xp9AAABR0lEQVQ4y52R6ZKCMBAGB8IREg4FEVA8drff/xlXsHZLNAhl/yJDJ1/NjHxInNuzBn22eSzztL7iH+W3c15e
                                  ABRVllX3r9zt1YCqAxkJagXULs8C0UNaGwH21duCforKNWyfvT3o/UtRw1MxPsFVXrjCaTqmEjbiYAPlpGBIPZfopZjHczA
                                  +OPNk8HC8QD6zBLhM74VuMZxkxYZEZkgwf303VkFaur0yBWWbsZGCkcDlBYwUt59hAklk4egSj2CjwQiHHWexeOC7RB88ibNh5wYVy
                                  ntRQoWRlIMsiXIgFYiWxQhWi6ujVzezfjzDwLv3A++Gga9e4Y0mUqBLcfINqKiRO7EXhOJmB9dYltmDkRU0CeQrvJ8TbGSGPgFI+tsS6h
                                  TO4ZyYMWKsAfhqZY4KvdtpRtRFZFlUWTnGLkRXnizQdwBdL5/yC+1CKknvBpjdAAAAAElFTkSuQmCC"
                                         className="bottom-bar__client-service__img" alt=""/>
                                    <div className="bottom-bar__client-service__text">客服</div>
                                </div>
                                <div className="bottom-bar__btn-wrapper">
                                    <div className="bottom-bar__btn">选座购买</div>
                                </div>
                            </div>
                            <div className="center">
                                <div className="center__right">
                                    <div className="detail__plus-tips">
                                        <div className="card-plus-tips">
                                            <div className="orange-plus-tips">
                                                <div className="orange-plus-tips__name">橙PLUS卡</div>
                                                <div className="orange-plus-tips__desc">开通送¥200 最高省108元</div>
                                                <div className="orange-plus-tips__guide">立即开通</div>
                                                <i className="iconfont ju-icon-arrow-right orange-plus-tips__arrow"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="center__right__benefit">
                                        <div className="show-benefit detail__schedule-discount">
                                            <div></div>
                                            <div>
                                                <div className="show-benefit-item discount-wrapper">
                                                    <span className="show-benefit-item__name">优惠</span>
                                                    <span className="show-benefit-item__colon">：</span>
                                                    <span className="show-benefit-item__content">
                                                      <div className="discount">
                                                          <div className="show-discount-benefit-item discount__item">
                                                              <div className="show-discount-benefit-item__content">
                                                                  <span
                                                                      className="show-discount-benefit-item__content__tag">折扣</span>
                                                                  <span
                                                                      className="show-discount-benefit-item__content__title full-display">优惠活动，指定票价8折</span>
                                                              </div>
                                                          </div>
                                                            <i className="iconfont ju-icon-ellipsis ellipsis discount__ellipsis"></i>
                                                      </div>
                                                  </span>
                                                </div>
                                                <div></div>
                                            </div>
                                            <div>
                                                <div className="show-benefit-item plus">
                                                    <span className="show-benefit-item__name">VIP+</span>
                                                    <span className="show-benefit-item__colon">：</span>
                                                    <span className="show-benefit-item__content">
                                                      <div className="plus__desc">     V+会员享
                                                      <span className="plus__desc__benefit">国内免邮 + 双倍积分</span>
                                                      <i className="iconfont ju-icon-arrow-right plus__desc__arrow">

                                                      </i>
                                                      </div>
                                                  </span>
                                                </div>
                                                <div></div>
                                            </div>
                                            <div>
                                                <div className="show-benefit-item">
                                                    <span className="show-benefit-item__name">入场</span>
                                                    <span className="show-benefit-item__colon">：</span>
                                                    <span className="show-benefit-item__content">
                                                  <div className="enter">1.1米以上儿童凭票进场，1.1米以下儿童谢绝入场。凭票入场，对号入座。</div>
                                                  </span>
                                                </div>
                                                <div></div>
                                            </div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="center__left">
                                    <div className="intro detail__intro center__left__intro">
                                        <div className="intro__title">演出介绍</div>
                                        <div className="intro__content">
                                            <p>
                                                <img
                                                    src="https://image.juooo.com///group1/M00/04/3F/rAoKNV6VYRSAadaqABvTHvBoPIY662.png"
                                                    alt=""/>
                                                <img
                                                    src="https://image.juooo.com///group1/M00/03/96/rAoKmV6VYQmAEQBnAAJuIAGGLAA192.png"
                                                    alt=""/>
                                            </p>
                                            <p>
                                                <img
                                                    src="https://image.juooo.com///////group1/M00/04/01/rAoKNV3nGfSAKQ_fABWIFWWEJ_0607.jpg"
                                                    alt=""/>
                                            </p>
                                        </div>
                                        {/*<div className="intro__mask"></div>*/}
                                        {/*<div className="intro__more"></div>*/}
                                    </div>
                                    <div className="tips detail__tips center__left__tips-entry">
                                        <div className="tips__title">
                                            <span className="tips__title__text">温馨提示</span>
                                            <span className="tips__title__arrow"></span>
                                        </div>
                                        <div className="tips__list">
                                            <span className="tips__list__item">
                                                <span className="tips__list__item__dot"></span>
                                                <span className="tips__list__item__text">配送说明</span>
                                            </span>
                                            <span className="tips__list__item">
                                                <span className="tips__list__item__dot"></span>
                                                <span className="tips__list__item__text">订票说明</span>
                                            </span>
                                            <span className="tips__list__item">
                                                <span className="tips__list__item__dot"></span>
                                                <span className="tips__list__item__text">确定订单</span>
                                            </span>
                                            <span className="tips__list__item">
                                                <span className="tips__list__item__dot"></span>
                                                <span className="tips__list__item__text">购票提醒</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="recommend detail__recommend center__left__recommend">
                                        <div className="recommend__title">相关推荐</div>
                                        <div className="recommend__list">
                                            <div className="item">
                                                <div className="ju-schedule-cell-wrapper cell__base middle">
                                                    <div className="ju-schedule-cell">
                                                        <div className="ju-schedule-cell__cover">
                                                            <div className="image ju-schedule-cell__cover__img">
                                                                <img
                                                                    src="https://image.juooo.com/group1/M00/04/04/rAoKNV3o3tCAbCKNAAB3v6NC4vs503.jpg"
                                                                    className="ju-image ju-image--fill" alt=""/>
                                                            </div>
                                                        </div>
                                                        <div className="ju-schedule-cell__info">
                                                            <div className="ju-schedule-cell__info__date-week">
                                                                <span className="ju-schedule-cell__info__date-week__date">2020.06.04 - 06.06</span>
                                                                <span
                                                                    className="ju-schedule-cell__info__date-week__week"></span>
                                                            </div>
                                                            <div className="ju-schedule-cell__info__name">
                                                                <div
                                                                    className="ju-schedule-cell__info__name__content ">聚橙制作|百老汇爱情音乐轻喜剧《第一次约会》中文版-深圳站
                                                                </div>
                                                                <div className="ju-schedule-cell__info__place">深圳 |
                                                                    南山文体中心剧院大剧院
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item__label">
                                                    <span className="item__label__desc">可选座</span>
                                                    <span className="item__label__desc">套票</span>
                                                </div>
                                                <div className="item__price">
                                                    <span className="item__price__num">￥100</span>
                                                    <span className="item__price__text">起</span>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="ju-schedule-cell-wrapper cell__base middle">
                                                    <div className="ju-schedule-cell">
                                                        <div className="ju-schedule-cell__cover">
                                                            <div className="image ju-schedule-cell__cover__img">
                                                                <img
                                                                    src="https://image.juooo.com/group1/M00/04/05/rAoKNV3p9MGAL4-fAABlWN_fCvM587.jpg"
                                                                    className="ju-image ju-image--fill" alt=""/>
                                                            </div>
                                                        </div>
                                                        <div className="ju-schedule-cell__info">
                                                            <div className="ju-schedule-cell__info__date-week">
                                                                <span className="ju-schedule-cell__info__date-week__date">2020.09.03 - 09.06</span>
                                                                <span
                                                                    className="ju-schedule-cell__info__date-week__week"></span>
                                                            </div>
                                                            <div className="ju-schedule-cell__info__name">
                                                                <div
                                                                    className="ju-schedule-cell__info__name__content ">聚橙制作
                                                                    | 法语音乐剧《摇滚红与黑》-深圳站
                                                                </div>
                                                                <div className="ju-schedule-cell__info__place">
                                                                    深圳 | 南山文体中心剧院大剧院
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item__label">
                                                    <span className="item__label__desc">可选座</span>
                                                    <span className="item__label__desc">随时9折起</span>
                                                </div>
                                                <div className="item__price">
                                                    <span className="item__price__num">￥299</span>
                                                    <span className="item__price__text">起</span>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="ju-schedule-cell-wrapper cell__base middle">
                                                    <div className="ju-schedule-cell">
                                                        <div className="ju-schedule-cell__cover">
                                                            <div className="image ju-schedule-cell__cover__img">
                                                                <img
                                                                    src="https://image.juooo.com/group1/M00/04/25/rAoKNV4O1E2AR24SAABCOpBdJGk245.jpg"
                                                                    className="ju-image ju-image--fill" alt=""/>
                                                            </div>
                                                        </div>
                                                        <div className="ju-schedule-cell__info">
                                                            <div className="ju-schedule-cell__info__date-week">
                                                                <span className="ju-schedule-cell__info__date-week__date">2020.08.26 - 08.30</span>
                                                                <span
                                                                    className="ju-schedule-cell__info__date-week__week"></span>
                                                            </div>
                                                            <div className="ju-schedule-cell__info__name">
                                                                <div
                                                                    className="ju-schedule-cell__info__name__content ">
                                                                    聚橙出品 |世界经典原版音乐剧《猫》CATS-深圳站
                                                                </div>
                                                                <div className="ju-schedule-cell__info__place">
                                                                    深圳 | 南山文体中心剧院大剧院
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item__label">
                                                    <span className="item__label__desc">可选座</span>
                                                    <span className="item__label__desc">随时9折起</span>
                                                </div>
                                                <div className="item__price">
                                                    <span className="item__price__num">￥188</span>
                                                    <span className="item__price__text">起</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="recommend__more">
                                            查看更多演出
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="detail__placeholder"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
