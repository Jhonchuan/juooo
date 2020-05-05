import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import DialogCreator from "../../store/actionCreator/Dialog/index"
import "../../assets/style/dialog/index.css"
import loadingImg from "../../assets/img/loading/loading.gif"
class Dialog extends Component {
  confirm = () => {
    this.props.CLOSE_DIALOG()
    this.props.handleClick()
    if (this.props.closeFuction) this.props.closeFuction()
    // if (this.props.closeAlert) this.props.closeAlert()
  }
  close = e => {
    const buttons = document.querySelectorAll(".button")
    buttons.forEach(v => {
      if (e.target !== v) {
        this.props.CLOSE_DIALOG()
      }
    })
    this.props.handleClick()
  }
  componentWillMount() {
    const alertType = this.props.type || this.props.alertType
    const alertTip = this.props.children || this.props.alertTip
    const closeAlert = this.props.closeFuction || this.props.closeFuction
    this.props.OPEN_DIALOG({
      alertType,
      alertTip,
      closeAlert,
    })
  }
  render() {
    // 确认框
    const confirm = (
      <div className="alert-con" onClick={this.close}>
        <div className="alert-context">
          <div className="alert-content-detail">{this.props.alertTip}</div>
          <div className="button" onClick={this.confirm}>
            确认
          </div>
        </div>
      </div>
    )
    // alert弹出框
    const alert = (
      <div className="alert-con" onClick={this.close}>
        <div className="alert-context">
          <div className="alert-content-detail">{this.props.alertTip}</div>
          <div
            className="button alert-button"
            onClick={() => this.props.CLOSE_DIALOG()}
          >
            取消
          </div>
          <div className="button alert-button" onClick={this.confirm}>
            确认
          </div>
        </div>
      </div>
    )
    // 加载中
    const loading = (
      <div className="loading" onClick={() => this.props.CLOSE_DIALOG()}>
        <img src={loadingImg} alt="" className="loadingImg" />
      </div>
    )
    const dialog = { confirm, alert, loading }
    for (let key in dialog) {
      if (key === this.props.alertType) {
        return dialog[key]
      }
    }
  }
}
function mapStateToProps(state) {
  return {
    alertType: state.dialog.alertType,
    alertStatus: state.dialog.alertStatus,
    alertTip: state.dialog.alertTip,
    closeAlert: state.dialog.closeAlert,
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(DialogCreator, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Dialog)
