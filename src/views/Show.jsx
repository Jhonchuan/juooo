import React, {Component} from 'react'
import "../assets/style/show/index.css"
import Comm from "../components/common/CommonHeader.jsx"

export default class Show extends Component {
    render() {
        return (
            <div>
                <Comm title="演出"></Comm>
                <div className="show_type_wrap">
                    <div className="show_type js_li_type">
                        <ul style={{width: "5068.8px", "transition-timing-function": "cubic-bezier(0.165, 0.84, 0.44, 1)" ,"transition-duration": "0ms; transform: translate(0px, 0px) scale(1) translateZ(0px)"}}>
                            <li className="active">全部</li>
                            <li>演唱会</li>
                            <li>音乐会</li>
                            <li>话剧歌剧</li>
                        </ul>
                    </div>
                    <div className="city_wrap">
                        <span className="city">全国</span>
                        <span className="city_icon"></span>
                    </div>
                </div>
                <div className="library-wrap">
                    <div className="aaa">
                    <div className="show-model">
                        <div className="show-model__main" >
                            <div className="show-model__item">
                                <div className="falls-cell">
                                    <div className="falls-cell__image">
                                        <img
                                            src="https://image.juooo.com/group1/M00/03/25/rAoKmV2f3-yADPouAACAMESBbK8067.jpg"
                                            alt=""/>
                                        <span className="falls-cell__image__label">深圳</span>
                                    </div>
                                    <div className="falls-cell__info">
                                        <div className="falls-cell__info__title">
                                            <div className="falls-cell__info__title__sponsor">
                                                <img src="https://image.juooo.com/upload/i.png" alt=""/>
                                            </div>
                                            <h3 class="falls-cell__info__title__cell text-space">
                                                【演出延期】聚橙出品 |百老汇现象级原版音乐剧《来自远方》-深圳站
                                            </h3>
                                        </div>
                                        <p className="falls-cell__info__date">
                                            <span>2020.06.12 - 06.14  </span>
                                        </p>
                                        <p className="falls-cell__info__price">
                                            <span className="falls-cell__info__price--price">￥218</span>
                                            <span className="falls-cell__info__price__tip">起</span>
                                        </p>
                                        <p className="falls-cell__info__support">
                                            <span className="falls-cell__info__support--label">电子票</span>
                                            <span className="falls-cell__info__support--label">可选座</span>
                                            <span className="falls-cell__info__support--label">限时8折</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="show-model__item" >
                                <div className="falls-cell">
                                    <div className="falls-cell__image">
                                        <img
                                            src="https://image.juooo.com/group1/M00/03/4F/rAoKmV3coBSACvRgAAA_JxjLZt0032.jpg"
                                            alt=""/>
                                        <span className="falls-cell__image__label">西安</span>
                                    </div>
                                    <div className="falls-cell__info">
                                        <div className="falls-cell__info__title">
                                            <div className="falls-cell__info__title__sponsor">
                                                <img src="https://image.juooo.com/upload/i.png" alt=""/>
                                            </div>
                                            <h3 class="falls-cell__info__title__cell text-space">
                                                聚橙出品 | 世界经典原版音乐剧《猫》CATS-西安站
                                            </h3>
                                        </div>
                                        <p className="falls-cell__info__date">
                                            <span>2020.07.24 - 07.28    </span>
                                        </p>
                                        <p className="falls-cell__info__price">
                                            <span className="falls-cell__info__price--price">￥118</span>
                                            <span className="falls-cell__info__price__tip">起</span>
                                        </p>
                                        <p className="falls-cell__info__support">
                                            <span className="falls-cell__info__support--label">电子票</span>
                                            <span className="falls-cell__info__support--label">可选座</span>
                                            <span className="falls-cell__info__support--label">限时8折</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )

    }
}
