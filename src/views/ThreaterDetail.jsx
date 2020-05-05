import React, { Component } from 'react'
import axios from "axios"
import "../assets/style/theatre/detail.css"
export default class ThreaterDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: {},
            result2: []
        }
    }
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
                                            <img src="https://image.juooo.com/group1/M00/01/D2/rAoKmVwknq2AQjJ3AABZC2s-o9o803.jpg" alt="" />
                                        </div>
                                        <div className="theater-detail__header__theater__detail__top__right">
                                            <div className="theater-detail__header__theater__detail__top__right__name">
                                                {this.state.result.theatre_name}
                                            </div>
                                            <div className="theater-detail__header__theater__detail__top__right__sale-count">
                                                {this.state.result.sch_num} 场在售演出
                                            </div>
                                        </div>
                                    </div>
                                    <div className="theater-detail__header__theater__detail__address">
                                        {this.state.result.city_name} | {this.state.result.theatre_address}
                                    </div>
                                </div>
                            </div>
                            <div className="theater-detail__header__pointer">
                                <div className="theater-detail__header__pointer__img"></div>
                            </div>
                        </div>
                        <div className="theater-detail__tip">热门演出</div>
                        <div className="theater-detail__list">
                            {
                                this.state.result2.map(v => (
                                    <div key={v.schedular_id} className="item" onClick={()=>{window.location.href=v.url}}>
                                        <div className="ju-schedule-cell-wrapper cell__base middle">
                                            <div className="ju-schedule-cell">
                                                <div className="ju-schedule-cell__cover">
                                                    <div className="image ju-schedule-cell__cover__img">
                                                        <img className="ju-image ju-image--fill" src={v.pic} alt="" />
                                                    </div>
                                                </div>
                                                <div className="ju-schedule-cell__info">
                                                    <div className="ju-schedule-cell__info__date-week">
                                                        <span className="ju-schedule-cell__info__date-week__date">{v.end_show_time}</span>
                                                        <span className="ju-schedule-cell__info__date-week__week"></span>
                                                    </div>
                                                    <div className="ju-schedule-cell__info__name">
                                                        <div className="ju-schedule-cell__info__name__content ">
                                                            {v.name}
                                                        </div>
                                                    </div>
                                                    <div className="ju-schedule-cell__info__place">
                                                        {v.city_name} | {v.venue_name}
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item__label">
                                            <span className="item__label__desc">{v.support_desc[0]}</span>
                                            <span className="item__label__desc">{v.support_desc[1]}</span>
                                            <span className="item__label__desc">{v.support_desc[2]}</span>
                                        </div>
                                        <div className="item__price">
                                            <span className="item__price__num">{v.min_price}</span>
                                            <span className="item__price__text">起</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="load-more__tips">没有更多了</div>
                    </div>
                </div>
            </div>
        )
    }
    // https://api.juooo.com/theatre/index/getTheatreInfo?theatre_id=2&longitude=&latitude=&version=6.1.1&referer=2
    async componentDidMount() {
        const data = await axios.get("/theatre/index/getTheatreInfo?theatre_id=2&longitude=&latitude=&version=6.1.1&referer=2")
        const result = data.data;
        this.setState(
            {
                result: result
            }
        )
        // console.log(this.state.result.theatre_id);
        // https://api.juooo.com/Show/Search/getShowList?page=1&venue_id=1078,1079,1795&version=6.1.1&referer=2
        const data2 = await axios.get("/Show/Search/getShowList?page=1&venue_id=1078,1079,1795&version=6.1.1&referer=2")
        const result2 = data2.data.list;
        this.setState(
            {
                result2: result2
            }
        )
        console.log(this.state.result2);
    };
}
