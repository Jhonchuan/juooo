import React, { Component } from "react"
import "../../assets/style/Eticket/index.css"
import ticket_empty from "../../assets/img/Eticket/ticket_empty.png"
import axios from "axios"
export default class Eticket extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false,
      list: [],
    }
  }
  async componentWillMount() {
    const ifToken = document.cookie
      .split(";")
      .find(v => v.split("=")[0].trim() === "juooo_token")
    if (ifToken) {
      const userName = document.cookie
        .split(";")
        .find(v => v.split("=")[0].trim() === "userName")
        .split("=")[1]
      this.setState({ isLogin: true })
      const data = await axios.get("/api/getCar", { params: { userName } })
      this.setState({ list: data.result })
    }
  }

  render() {
    // 票夹列表
    const ticketList = (
      <div className="ticket-list__content">
        <div className="load-more">
          <div className="ticket-list__list">
            {this.state.list.map(v => (
              <div
                className="ticket-list-item ticket-list__list__item"
                key={v.showId}
              >
                <div className="ticket-list-item__schedule">
                  <div className="ticket-list-item__schedule__left">
                    <div className="ticket-list-item__schedule__left__name">
                      {v.showTitle}
                    </div>
                    <div className="ticket-list-item__schedule__left__date">
                      {v.startDate}
                    </div>
                    <div className="ticket-list-item__schedule__left__place">
                      {v.showThreater}
                    </div>
                  </div>
                  <div>
                    <img
                      src={v.showPic}
                      className="ticket-list-item__schedule__right__cover"
                    />
                  </div>
                </div>
                <div className="ticket-list-item__divider"></div>
                <div className="ticket-list-item__ticket">
                  <div className="ticket-list-item__ticket__price">
                    ¥ {v.showPrice}
                  </div>
                  <div className="ticket-list-item__ticket__divider"> | </div>
                  <div className="ticket-list-item__ticket__count">1张</div>
                  <div className="ticket-list-item__ticket__entry">电子票</div>
                  <div className="ticket-list-item__status">已收货</div>
                </div>
              </div>
            ))}
          </div>
          <div className="load-more__tips">没有更多了</div>
        </div>
      </div>
    )
    // 空票夹
    const emptyList = (
      <div className="ticket-empty">
        <img src={ticket_empty} alt="" className="ticket-empty__img" />
        <div className="ticket-empty__tips">暂无电子票</div>
        {this.state.isLogin ? null : (
          <button
            className="ju-button-Eticket"
            onClick={() => (window.location.href = "/passport/login")}
          >
            登录
          </button>
        )}
      </div>
    )
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
          {this.state.list.length > 0 ? ticketList : emptyList}
        </div>
      </div>
    )
  }
}
