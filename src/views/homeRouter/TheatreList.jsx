import React, { Component } from "react"
import axios from "axios"
import "../../assets/style/theatre/index1.css"
import Swiper from "swiper"
import "swiper/css/swiper.min.css"
export default class TheatreList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theatre_list: []
        }
    }
    render() {
        return (
            <div className="theater-wrap">
                <div className="theater-head">
                    <header className="head_nav">
                        <h3 className="title text-single">剧院</h3>
                    </header>
                </div>
                <div className="theater-body">
                    <div className="theater-body__main">
                        <div className="wrapper">
                            <div className="content">
                                <div id="theaterList" className="theater-list">
                                    <ul className="theater-ul">
                                        {
                                            this.state.theatre_list.map(v => (
                                                <React.Fragment key={v.id}>
                                                    {v.count != 0 ? (<li className="theater-li">
                                                        <div className="theater-info-shows">
                                                            <div className="theater-info">
                                                                <a href="" className="theater-pic-name-count">
                                                                    <div className="theater-pic-wrap">
                                                                        <img className="theater-pic" src={v.pic} alt="" />
                                                                    </div>
                                                                    <div className="theater-name-count-wrap">
                                                                        <p className="theater-name">{v.name}</p>
                                                                        <p className="theater-count">{v.count}场在售演出</p>
                                                                    </div>
                                                                </a>
                                                                <a href={"http://127.0.0.1:3000/theatre/detail/" + v.id} className="theater-link">
                                                                    <img src="https://m.juooo.com/static/img/more.2ce7873.png" alt="" />
                                                                </a>
                                                            </div>
                                                            <div className="theater-shows">
                                                                <div className="theater-show-wrap">
                                                                    <div className="swiper-container swiper-container-horizontal swiper-container-android">
                                                                        <div className="swiper-wrapper">
                                                                            {
                                                                                v.showList.map(item => (
                                                                                    <div key={item.id} className="swiper-slide">
                                                                                        <div className="theater-show-date">
                                                                                            <p className="show-date">{item.show_time}</p>
                                                                                            <span className="dot"></span>
                                                                                        </div>
                                                                                        <a href="#" className="theater-show-pic">
                                                                                            <img src={item.pic} alt="" />
                                                                                        </a>
                                                                                    </div>
                                                                                ))
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>) : null}
                                                </React.Fragment>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    //请求 
    async componentDidMount() {
        console.log(Swiper);
        new Swiper('.swiper-container', {
            // slidesPerView: 3,
            // spaceBetween: 30,
            // slidesPerGroup: 3,
        })
        const { data } = await axios.get("/theatre/index/getTheatreList?page=1&version=6.1.1&referer=2")
        const result = data.theatre_list.filter(item => item.showList != []);
        // console.log(result.showList[3].showList)
        this.setState(
            {
                theatre_list: result
            }
        )
    }

}
