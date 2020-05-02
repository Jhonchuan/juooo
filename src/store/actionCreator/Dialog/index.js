import DialogActionType from "../../actionType/Dialog/index"
export default {
  OPEN_DIALOG(payload) {
    return {
      type: DialogActionType.OPEN_DIALOG,
      payload,
    }
  },
  CLOSE_DIALOG(payload = {}) {
    return {
      type: DialogActionType.CLOSE_DIALOG,
      payload,
    }
  },
}
