import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Button, Gap } from "../../components/addOns";
import { Outlet } from "react-router-dom";
import "./home.css";

export const HomeLogin = (props) => {
  const { loginStatus, loginCbHandler } = props;

  return (
    <>
      <Navbar
        loginStatus={loginStatus}
        loginCbHandler={loginCbHandler}
      ></Navbar>
      <div className="home-page-wrapper">
        <Gap height={20} />
        <div className="content-wrapper">
          <Outlet></Outlet>
        </div>
        <div className="pagination">
          <Button title="Previous" />
          <Gap width={20} />
          <Button title="Next" />
        </div>

        <Gap height={20} />
      </div>
    </>
  );
};

export default HomeLogin;
