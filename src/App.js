import React, { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import TextUtils from "./Component/TextUtils";
import AlertCom from "./Component/Alert";

function App() {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")));
  localStorage.setItem("theme", JSON.stringify(theme));
  const toggle = () => {
    setTheme(!theme);
  };
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(()=>{
      setAlert(null)
    },2000)
  };
  return (
    <div className={`${theme ? "light__body" : "dark__body"}`}>
      <Navbar toggle={toggle} theme={theme} />
      <AlertCom alert={alert} />
      <TextUtils theme={theme} showAlert={showAlert}/>
    </div>
  );
}

export default App;
