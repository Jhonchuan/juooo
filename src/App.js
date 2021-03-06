import React from "react"
import router from "./router/index"
import SwitchRouter from "./components/common/SwitchRouter"
import "./App.css"
import "./assets/style/icon/iconfont.css"
function App() {
  return (
    <div className="App">
      <SwitchRouter router={router}></SwitchRouter>
    </div>
  )
}

export default App
