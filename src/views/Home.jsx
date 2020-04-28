import React, { Component } from 'react'
import SwitchRouter from "../components/common/SwitchRouter"
import axios from "axios"
import {
    NavLink
} from "react-router-dom"
export default class Home extends Component {
    render() {
        return (
            <div>
                <nav>
                    <NavLink to={'/'}>首页</NavLink>
                    <NavLink to={'/theatre/theatreList'}>剧院</NavLink>
                    <NavLink to={'/eticket/list'}>票夹</NavLink>
                    <NavLink to={'/myjuooo/myjuooo'}>我的</NavLink>
                </nav>
                <SwitchRouter router={this.props.childrens}></SwitchRouter>
            </div>
        )
    }
    async componentDidMount(){
        const {data} = await axios.get("/orange/vip/index/getVipHomeSchedular",{
            params:{
                city_id:1,
                version:"6.1.1",
                referer:2
            }
        })
        console.log(data)
    }
}
