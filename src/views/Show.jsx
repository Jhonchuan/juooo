import React, {Component} from 'react'
import "../assets/style/show/index.css"
import Comm from "../components/common/CommonHeader.jsx"

export default class Show extends Component {
    render() {
        return (
            <div>
                {/*<Comm title="演出"></Comm>*/}
                {/*<img src="https://image.juooo.com/group1/M00/03/25/rAoKmV2f3-yADPouAACAMESBbK8067.jpg" alt=""/>*/}
                <div className="show_type_wrap">
                    <div className="show_type js_li_type">
                        <ul>
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
                    <div>
                        <div className="show-model">
                            <div className="show-model__main">
                                <div className="show-model__item">
                                    <img src="https://image.juooo.com/group1/M00/03/25/rAoKmV2f3-yADPouAACAMESBbK8067.jpg" alt=""/>
                                    <div>12</div>
                                    {/*<div>*/}
                                        {/*<div className="falls-cell">*/}
                                            {/*<div className="falls-cell__image">*/}
                                                {/*<img src="https://image.juooo.com/group1/M00/03/25/rAoKmV2f3-yADPouAACAMESBbK8067.jpg" alt=""/>*/}
                                                {/*<span className="falls-cell__image__label">深圳</span>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}
