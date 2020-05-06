import React, { Component } from "react"
import CityList from "./CityList"
class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 1,
      isDialog: false,
      isLoading: false,
      isAlert: false,
      isCity: false,
    }
  }
  closeConfirm() {
    console.log(111111111)
  }
  closeAlert() {
    console.log(111111111)
  }
  chooseCity = cityName => {
    console.log(cityName)
  }
  render() {
    console.log(this.state.isCity)
    return (
      <div>
        <button onClick={() => this.setState({ isCity: true })}>出现</button>
        {this.state.isCity ? (
          <CityList
            close={() => this.setState({ isCity: false })}
            confirm={this.chooseCity}
          ></CityList>
        ) : null}
      </div>
    )
  }
}
export default Test
