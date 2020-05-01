import React, { Component } from "react"
import SwitchRouter from "../components/common/SwitchRouter"
import axios from "axios"
import { NavLink } from "react-router-dom"
export default class Home extends Component {
  render() {
    return (
      <div>
        <nav className={"bottom_nav"}>
          <div className="tabs-block__nav__item">
            <div className="tabs-block__nav__item__link">
              <span className="tabs-block__nav__item__link--icon ticket--icon"></span>
              <NavLink className="link-route" to={"/"}>首页</NavLink>
            </div>
          </div>
          <div className="tabs-block__nav__item">
            <div className="tabs-block__nav__item__link">
              <span className="tabs-block__nav__item__link--icon ticket--icon"></span>
              <NavLink className="link-route" to={"/theatre/theatreList"}>剧院</NavLink>
            </div>
          </div>
          <div className="tabs-block__nav__item">
            <div className="tabs-block__nav__item__link">
              <span className="tabs-block__nav__item__link--icon ticket--icon"></span>
              <NavLink className="link-route" to={"/eticket/list"}>票夹</NavLink>
            </div>
          </div>
          <div className="tabs-block__nav__item">
            <div className="tabs-block__nav__item__link">
              <span className="tabs-block__nav__item__link--icon ticket--icon"></span>
              <NavLink className="link-route" to={"/myjuooo/myjuooo"}>我的</NavLink>
            </div>
          </div>
        </nav>
        <SwitchRouter router={this.props.childrens}></SwitchRouter>
      </div>
    )
  }
  // async componentDidMount(){
  //     const {data} = await axios.get("/orange/vip/index/getVipHomeSchedular",{
  //         params:{
  //             city_id:1,
  //             version:"6.1.1",
  //             referer:2
  //         }
  //     })
  //     console.log(data)
  // }
}
