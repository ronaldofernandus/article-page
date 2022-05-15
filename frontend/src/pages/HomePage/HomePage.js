import React, { useState, useEffect } from "react";
import { Button, Gap } from "../../components/addOns";
import { Outlet } from "react-router-dom";

import "./home.css";

const HomePage = () => {
  return (
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
  );
};

export default HomePage;
