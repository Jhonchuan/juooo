import React from 'react';
import './App.css';
import router from "./router/index"
import SwitchRouter from "./components/common/SwitchRouter"
function App() {
  return (
    <div className="App">
      <SwitchRouter router={router}></SwitchRouter>
    </div>
  );
}

export default App;
