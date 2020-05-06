import React, { Component } from 'react'
import isLoading from "../../assets/img/loading/loading.gif"
export default class IsLoading extends Component {
    render() {
        return (
            <div>
                <img src={isLoading} alt=""/>
            </div>
        )
    }
}
