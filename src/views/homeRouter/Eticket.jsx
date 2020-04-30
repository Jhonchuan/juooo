import React, { Component } from "react"
import "../../assets/style/Eticket/index.css"
import ticket_empty from "../../assets/img/Eticket/ticket_empty.png"
export default class Eticket extends Component {
  render() {
    console.log()
    return (
      <div
        className="my-ticket-list"
        style={{ height: document.documentElement.clientHeight + "px" }}
      >
        <div className="ticket-list my-ticket-list__list">
          <section className="title ticket-list__title">
            <span className="title__text">票夹</span>
            <div className="title__nav-wrapper">
              <div className="title__nav">
                <i className="iconfont icon-sangedian"></i>
              </div>
            </div>
          </section>
          {/* 票夹为空 */}
          {/* <div className="ticket-empty">
            <img src={ticket_empty} alt="" className="ticket-empty__img" />
            <div className="ticket-empty__tips">暂无电子票</div>
            <button
              className="ju-button-Eticket"
              onClick={() => (window.location.href = "/passport/login")}
            >
              登录
            </button>
          </div> */}
          {/* 票夹有内容 */}
          <div className="ticket-list__content">
            <div className="load-more">
              <div className="ticket-list__list">
                <div className="ticket-list-item ticket-list__list__item">
                  <div className="ticket-list-item__schedule">
                    <div className="ticket-list-item__schedule__left">
                      <div className="ticket-list-item__schedule__left__name">
                        （演出变更）【小橙堡】奇幻亲子音乐剧《绿野仙踪》-石家庄
                      </div>
                      <div className="ticket-list-item__schedule__left__date">
                        2020.05.16 周六 10:30
                      </div>
                      <div className="ticket-list-item__schedule__left__place">
                        石家庄 | 石家庄大剧院 中剧场
                      </div>
                    </div>
                    <div>
                      <img
                        src={ticket_empty}
                        className="ticket-list-item__schedule__right__cover"
                      />
                    </div>
                  </div>
                  <div className="ticket-list-item__divider"></div>
                  <div className="ticket-list-item__ticket">
                    <div className="ticket-list-item__ticket__price">
                      ¥ 50.00
                    </div>
                    <div className="ticket-list-item__ticket__divider"> | </div>
                    <div className="ticket-list-item__ticket__count">1张</div>
                    <div className="ticket-list-item__ticket__entry">
                      电子票
                    </div>
                    <div className="ticket-list-item__status">已收货</div>
                  </div>
                </div>
              </div>
              <div className="load-more__tips">没有更多了</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
