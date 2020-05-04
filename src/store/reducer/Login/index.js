import LoginInit from "../../state/Login/index"
import LoginActionType from "../../actionType/Login/index"
export default function Login(state = LoginInit, { type, payload }) {
  state = JSON.parse(JSON.stringify(state))
  if (type === LoginActionType.CHANGE_IMG_CAPTCHA) {
    state.captchaCode = payload
  }
  if (type === LoginActionType.GET_PHONE_CAPTCHA) {
    state.phoneCaptcha = payload
  }
  return state
}
