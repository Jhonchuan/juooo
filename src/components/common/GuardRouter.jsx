import React, { Component } from "react"

export default class GuardRouter extends Component {
  render() {
    return (
      <div>
        <this.props.component {...this.props} />
      </div>
    )
  }
  componentDidMount() {
    console.log(this.props)
    if (!/passport/i.test(this.props.path)) {
      localStorage.returnUrl = window.location.href
    }
  }
}
