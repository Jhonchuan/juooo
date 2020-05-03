import LoginActionType from "../../actionType/Login/index"
import axios from "axios"
export default {
  CHANGE_IMG_CAPTCHA(payload) {
    return {
      type: LoginActionType.CHANGE_IMG_CAPTCHA,
      payload,
    }
  },
  getCapcha(imgPack) {
    return async dispatch => {
      const { codeData, captchaCode } = await axios.get("/api/get-img-verify")
      imgPack.innerHTML = codeData.img
      dispatch(this.CHANGE_IMG_CAPTCHA(captchaCode))
    }
  },
}
