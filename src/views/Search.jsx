<<<<<<< HEAD
import React, { Component } from 'react'
import "../assets/style/search/index.css"
export default class Search extends Component {
    render() {
        return (
            <div id ="app">
            <div className="search">
                <header className="head">
                    <div className="search-ipt">
                        <span className="search-icon"></span>
                        <form action="">
                            <input type="search" placeholder="搜索热门演出" className="text" />
                        </form>
                        <span className="cancel-icon"></span>
                    </div>
                    <span className="cancel ">取消</span>
                </header>
                <section className="search_com">
                    <div className="search_com__wrap">
                        <div className="default-wrap">
                            <section className="default hot-search">
                                <h3 className="title clearfix">
                                    <span className="left">热门搜索</span>
                                
                              </h3>
                                <ul className="list">
                                    <li>冰雪奇缘</li>
                                    <li>第一次约会</li>
                                    <li>摇滚红与黑</li>
                                    <li>魔女宅急便</li>
                                    <li>咖啡因</li>
                                    <li>猫CATS</li>
                                </ul>
                            </section>
                        </div>
                        <div className="empty-wrap" >
                            <section className="show-block">
                                <div className="show-main">
                                    <div className="show-model">
                                        <div className="show-model__main" ></div>
                                        <div className="van-loading van-loading--circular van-loading" >
                                            <span className="van-loading__spinner van-loading__spinner--circular">
                                                <svg className="van-loading__circular">
                                                    <circle cx="50" cy="50" r="20" fill="none">
                                                    </circle>
                                                </svg>
                                            </span>
                                        </div>
                                        <p className="no-more" >
                                            <span className="no-more_tips">没有更多了</span>
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
            </div>
        )
    }
=======
import React, { Component } from "react"

export default class Search extends Component {
  render() {
    return <div>搜索/搜索列表</div>
  }
>>>>>>> 4539fdcb0c3082fae90e057b2a3db4b83233759d
}
