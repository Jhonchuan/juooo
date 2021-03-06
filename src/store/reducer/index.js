import { ticketReducer } from "./ticketReducer/index"
import {homeReducer} from "./homeReducer/index"
import dialog from "./Dialog/index"
import login from "./Login/index"
import { combineReducers } from "redux"
const rootReducer = combineReducers({
  ticketReducer,
  dialog,
  homeReducer,
  login,
})
export default rootReducer
