import { ticketReducer } from "./ticketReducer/index"
import dialog from "./Dialog/index"
import login from "./Login/index"
import { combineReducers } from "redux"
const rootReducer = combineReducers({
  ticketReducer,
  dialog,
  login,
})
export default rootReducer
