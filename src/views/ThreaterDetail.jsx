import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import axios from "axios"
import "../assets/style/theatre/detail.css"
class ThreaterDetail extends Component {
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
                                <i className="iconfont ju-icon-arrow theater-detail__header__title__back icon-left" onClick={()=>window.history.go(-1)}></i>
                            </div>
                            <div className="theater-detail__header__theater">
                                <div className="theater-detail__header__theater__detail">
                                    <div className="theater-detail__header__theater__detail__top">
                                        <div className="theater-detail__header__theater__detail__top__head">
                                            <img src={this.state.result.theatre_pic} alt="" />
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
                                    <div key={v.schedular_id} className="item" onClick={(e)=>this.fn.call(this,e)} data-col={v.schedular_id}>
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

    async componentDidMount() {
        const theatre_id = this.props.location.pathname.split("/")[3]
        // console.log(theatre_id)
        const url = "/theatre/index/getTheatreInfo?theatre_id="+ theatre_id +"&longitude=&latitude=&version=6.1.1&referer=2"
        const data = await axios.get(url)
        console.log(data);
        const result = data.data;
        this.setState(
            {
                result: result
            }
        )
        const data2 = await axios.get("/Show/Search/getShowList?page=1&venue_id="+result.venue_ids+"&version=6.1.1&referer=2")
        const result2 = data2.data.list;
        this.setState(
            {
                result2: result2
            }
        )
        // console.log(this.state.result2);
    };

    fn(e){
        this.props.history.push({pathname:"/ticket/"+e.currentTarget.getAttribute('data-col')})
    }
}
export default withRouter( ThreaterDetail )
