import { ticketReducer } from "./ticketReducer/index"
import dialog from "./Dialog/index"
import { combineReducers } from "redux"
const rootReducer = combineReducers({
  ticketReducer,
  dialog,
})
export default rootReducer
