import DialogInit from "../../state/Dialog/index"
import DialogActionType from "../../actionType/Dialog/index"
export default function dialog(state = DialogInit, { type, payload }) {
  state = JSON.parse(JSON.stringify(state))
  if (type === DialogActionType.OPEN_DIALOG) {
    state = {
      ...state,
      ...payload,
    }
    state.alertStatus = true
  }
  if (type === DialogActionType.CLOSE_DIALOG) {
    state.alertStatus = false
  }
  return state
}
