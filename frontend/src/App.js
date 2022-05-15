import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar/Navbar";
import LoginUser from "./pages/Login/Login";
import Register from "./pages/Register/index";
import Content from "./components/Content/Content";
import HomeLogin from "./pages/HomePage/HomeLogin";

function App() {
  const [loginStatus, setloginStatus] = useState(false);
  const loginCbHandler = (result) => {
    setloginStatus(result);
  };
  return (
    <div className="container-fluid">
      {!loginStatus ? (
        <HomeLogin
          loginStatus={loginStatus}
          loginCbHandler={loginCbHandler}
        ></HomeLogin>
      ) : (
        <LoginUser></LoginUser>
      )}

      <Content></Content>
    </div>
  );
}

export default App;
