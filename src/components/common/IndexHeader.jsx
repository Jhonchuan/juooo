import React, { Component } from 'react'

<<<<<<< HEAD
let h3Style = {
    "fontSize":"0.48rem",
    "lineHeight":"0.61333rem",
    "height":"0.61333rem",
    "color":"#232323",
    "fontWeight":700,
}
export default class IndexHeader extends Component {
    render() {
        if(this.props.title==="舞台剧"){
            h3Style = {
                ...{"paddingLeft":"0.4rem"},
                ...h3Style
            }
        }
        return (
            <div style={{
                "display":"flex",
                "WebkitBoxPack":"justify",
                "justifyContent":"space-between"
=======
const h3Style = {
    "font-size":"0.48rem",
    "line-height":"0.61333rem",
    "height":"0.61333rem",
    "color":"#232323",
    "font-weight":700
}
export default class IndexHeader extends Component {
    render() {
        return (
            <div style={{
                "display":"flex",
                "-webkit-box-pack":"justify",
                "justify-content":"space-between"
>>>>>>> wxa
            }}>
                <h3 style={h3Style}>{this.props.title}</h3>
                <div style={{
                    "display":"flex",
<<<<<<< HEAD
                    "WebkitBoxAlign":"center",
                    "alignItems":"center",
                    "paddingRight":"0.13333rem"
                }}>
                    <span style={{
                        "fontSize":"0.34667rem",
=======
                    "-webkit-box-align":"center",
                    "align-items":"center",
                    "padding-right":"0.13333rem"
                }}>
                    <span style={{
                        "font-size":"0.34667rem",
>>>>>>> wxa
                        "color":"#232323"
                    }}>全部</span>
                    <img style={{
                        width:"0.53333rem",
                        height:"0.53333rem"
                    }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg==" alt=""/>
                </div>
            </div>
        )
    }
}
