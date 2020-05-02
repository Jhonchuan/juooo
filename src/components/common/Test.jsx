import React, { Component } from "react"
import Dialog from "./Dialog"
class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 1,
      isDialog: false,
      isLoading: false,
      isAlert: false,
    }
  }
  closeConfirm() {
    console.log(111111111)
  }
  closeAlert() {
    console.log(111111111)
  }
  render() {
    return (
      <div className="Two">
        Two
        <button onClick={() => this.setState({ isDialog: true })}>
          确认框
        </button>
        <p>
          <button onClick={() => this.setState({ isLoading: true })}>
            点击加载中
          </button>
        </p>
        <p>
          <button onClick={() => this.setState({ isAlert: true })}>
            alert弹出框
          </button>
        </p>
        <div>{this.state.num}</div>
        {/* 确认框 */}
        {this.state.isDialog ? (
          <Dialog
            type="confirm"
            closeFuction={this.closeConfirm}
            handleClick={() => this.setState({ isDialog: false })}
          >
            1234
          </Dialog>
        ) : null}
        {/* {this.state.isDialog ? (
          <Dialog
            handleClick={() => this.setState({ isDialog: false })}
          ></Dialog>
        ) : null} */}
        {/* 加载中 */}
        {this.state.isLoading ? <Dialog type="loading"></Dialog> : null}
        {/* alert弹出框 */}
        {this.state.isAlert ? (
          <Dialog
            type="alert"
            closeFuction={this.closeAlert}
            handleClick={() => this.setState({ isAlert: false })}
          >
            7778899
          </Dialog>
        ) : null}
      </div>
    )
  }
}
export default Test
