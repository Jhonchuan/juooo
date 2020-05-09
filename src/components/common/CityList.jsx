import React, { Component } from "react"
import "../../assets/style/cityList/index.css"
import axios from "axios"
export default class CityList extends Component {
  constructor() {
    super()
    this.state = {
      cityList: [],
    }
    this.search = null
  }
  searchCity() {
    const cityListEl = document.querySelectorAll(".van-picker-column__item")
    for (let i = 0; i < cityListEl.length; i++) {
      cityListEl[i].className = "van-ellipsis van-picker-column__item"
    }
    this.state.cityList.forEach((v, i) => {
      if (v.name === this.search.value) {
        cityListEl[i].className =
          "van-ellipsis van-picker-column__item van-picker-column__item--selected"
        document.querySelector("ul").style.transform = `translate3d(0px, ${
          88 - i * 44
        }px, 0px)`
      }
    })
  }
  async componentDidMount() {
    console.log(this.props)
    const { data } = await axios.get(
      "/city/city/getCityList?version=6.1.1&referer=2"
    )
    this.setState({ cityList: data.city_list })
    console.log(data.city_list)
    const cityListEl = document.querySelectorAll(".van-picker-column__item")
    for (let i = 0; i < cityListEl.length; i++) {
      cityListEl[i].className = "van-ellipsis van-picker-column__item"
    }
    document.querySelector("ul").style.transform = "translate3d(0px, 88px, 0px)"
    document.querySelector(".van-picker-column__item").className =
      "van-ellipsis van-picker-column__item van-picker-column__item--selected"
  }
  render() {
    return (
      <div className="juooo-popup">
        <div className="juooo-mark">
          <section className="juooo-picker">
            <div className="juooo-hairline--top-bottom juooo-picker__toolbar">
              <div
                className="juooo-picker__toolbar__cancel"
                onClick={() => this.props.close()}
              >
                取消
              </div>
              <div
                className="juooo-picker__toolbar__confirm"
                onClick={() => {
                  this.props.confirm(
                    document.querySelector(".van-picker-column__item--selected")
                      .innerText
                  )
                  this.props.close()
                }}
              >
                确认
              </div>
            </div>
            <div className="juooo-picker__block">
              <div
                className="van-search van-search--show-action"
                style={{ backgroundColor: "#fff" }}
              >
                <div className="van-search__content van-search__content--round">
                  <div className="van-cell van-cell--borderless van-field">
                    <div className="van-field__left-icon">
                      <i className="iconfont icon-fangdajing"></i>
                    </div>
                    <div className="van-cell__value van-cell__value--alone">
                      <div className="van-field__body">
                        <input
                          type="text"
                          className="van-field__control van-field__control--center"
                          placeholder="请输入搜索关键词"
                          ref={e => (this.search = e)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="van-search__action"
                  onClick={this.searchCity.bind(this)}
                >
                  搜索
                </div>
              </div>
            </div>
            <div className="juooo-picker__columns">
              <div className="van-picker">
                <div className="van-picker__column" style={{ height: "220px" }}>
                  <div
                    className="van-picker-column"
                    style={{ height: "220px" }}
                  >
                    <ul
                      style={{
                        transition: "all 0ms ease 0s",
                        transform: "translate3d(0px, 88px, 0px)",
                        lineHeight: "44px",
                      }}
                    >
                      {this.state.cityList.map(v => (
                        <li
                          className="van-ellipsis van-picker-column__item "
                          style={{ height: "44px" }}
                          key={v.id}
                        >
                          {v.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className="van-hairline--top-bottom van-picker__frame"
                    style={{ height: "44px" }}
                  ></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}
