import React, {Component} from 'react'
import "../assets/style/show/index.css"

export default class Show extends Component {
    render() {
        return (
            <div id="app" className>

                <div className="page show_library">
                    <section className="title library-title">
                        <span className="data-v-0f98d9e6">演出</span>
                        <i className="iconfont ju-icon-arrow title__back"></i>
                        <div className="title__nav-wrapper ">
                            <div className="title__nav">
                                <i className="iconfont ju-icon-ellipsis title__nav__ellipsis"></i>
                            </div>
                        </div>
                    </section>
                    <div className="show_type_wrap">
                        <div className="show_type js_li_type">
                            <ul>
                                <li className="active">全部</li>
                                <li className>演唱会</li>
                                <li className>音乐会</li>
                                <li className>话剧歌据</li>
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

                                </div>
                            </div>
                            {/*<div  className="type-filtrate type-filtrate" >*/}
                            {/*<section  className="dialog_bg">*/}
                            {/*<div  className="filtrate_bg"></div>*/}
                            {/*<div  className="filtrate-data">*/}
                            {/*<div  className="city-list">*/}
                            {/*<h3  className="title">*/}
                            {/*<span className="name">城市</span>*/}
                            {/*<span className="arr-icon"></span>*/}

                            {/*</h3>*/}
                            {/*<div className="list-wrap">*/}
                            {/*<ul  className="list">*/}
                            {/*<li className="active">全国</li>*/}
                            {/*<li className>深圳</li>*/}
                            {/*<li className>北京</li>*/}
                            {/*</ul>*/}
                            {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="foot">*/}
                            {/*<span>重置</span>*/}
                            {/*<span>确定</span>*/}
                            {/*</div>*/}
                            {/*</div>*/}
                            {/*</section>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}
