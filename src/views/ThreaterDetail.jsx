import React, { Component } from 'react'

export default class ThreaterDetail extends Component {
    render() {
        return (
            <div className="theater">
                <div className="load-more theater-detail">
                    <div>
                        <div className="theater-detail__header">
                            <div className="theater-detail__header__title">
                                <i className="iconfont ju-icon-arrow theater-detail__header__title__back"></i>
                            </div>
                            <div className="theater-detail__header__theater">
                                <div className="theater-detail__header__theater__detail">
                                    <div className="theater-detail__header__theater__detail__top">
                                        <div className="theater-detail__header__theater__detail__top__head">
                                            <img src="https://image.juooo.com/group1/M00/01/D2/rAoKmVwknq2AQjJ3AABZC2s-o9o803.jpg" alt=""/>
                                        </div>
                                        <div className="theater-detail__header__theater__detail__top__right">
                                            <div className="theater-detail__header__theater__detail__top__right__name">
                                                南山文体中心
                                            </div>
                                            <div className="theater-detail__header__theater__detail__top__right__sale-count">
                                                93场在售演出
                                            </div>
                                        </div>
                                    </div>
                                    <div className="theater-detail__header__theater__detail__address">
                                        深圳 | 广东省深圳市南山区南山大道和南头街交汇处
                                    </div>
                                </div>
                            </div>
                            <div className="theater-detail__header__pointer">
                                <div className="theater-detail__header__pointer__img"></div>
                            </div>
                        </div>
                        <div className="theater-detail__tip">热门演出</div>
                        <div className="theater-detail__list">
                            <div>
                                <div className="ju-schedule-cell-wrapper cell__base middle"></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className="load-more__tips">没有更多了</div>
                    </div>
                </div>
            </div>
        )
    }
}
