import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
const secStyle = {
    height: "1.17333rem",
    width: "100%",
    "background-color": "white",
    "font-size": "0.48rem",
    color: "#232323",
    position: "relative",
    "border-bottom": "1px solid #ebebeb",
    "box-sizing": "border-box",
}
const spanStyle = {
    "position": "absolute",
    "text-align": "center",
    "height": "1.17333rem",
    "line-height": "1.17333rem",
    "left": 0,
    "right": 0,
    "pointer-events": "none",
}
const iStyle = {
    "padding":"0.29333rem 0.53333rem 0.29333rem 0.26667rem",
    "font-size":"0.48rem",
    "position":"absolute",
    "left":0,
    "top":"50%",
    "transform":"translateY(-50%)",
}
class CommonHeader extends Component {
    render() {
        return (
            <div style={{
                "position": "absolute",
                top: 0,
                left: 0,
                right: 0,
                "z-index": 99
            }}>
                <section style={secStyle}>
                    <span style={spanStyle}>{this.props.title}</span>
                    <i onClick={()=>{
                        this.props.history.go(-1)
                    }} className="iconfont icon-left" style={iStyle}></i>
                    <div style={{
                        "position":"absolute",
                        "right":0,
                        "top":"50%",
                        "transform":"translateY(-50%)"
                    }}>
                        <div style={{
                            "display":"flex",
                            "-webkit-box-align":"center",
                            "align-items":"center",
                            "padding-right":"0.2rem",
                        }}>
                            <i style={{
                                "font-size":"0.48rem",
                                "padding":"0.29333rem 0.2rem 0.29333rem 0.2rem"
                            }} className="iconfont icon-sangedian"></i>
                        </div>
                    </div>
                </section>
            </div >
        )
    }
}
export default withRouter(CommonHeader)