import React, { useState } from "react";
import { LoginBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components/addOns";
import { useNavigate } from "react-router-dom";
import { loginAxios } from "../../actions/loginAxios";

const LoginUser = () => {
  const [penulis, setPenulis] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const registerHandler = () => {
    navigate("/Register");
  };
  const loginHandler = () => {
    // navigate("/HomePage");
    // console.log(login);
    loginAxios();
  };
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" alt="imageBg" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input
          onChange={(e) => setPenulis({ ...penulis, username: e.target.value })}
          label="Username"
          placeholder="Username"
        />
        <Gap height={18} />
        <Input
          onChange={(e) => setPenulis({ ...penulis, password: e.target.value })}
          label="Password"
          placeholder="Password"
        />
        <Gap height={50} />
        <Button title="Login" onClick={() => loginHandler()} />
        <Gap height={100} />
        <Link
          title="Belum punya akun?, silahkan register"
          onClick={() => registerHandler()}
        />
      </div>
    </div>
  );
};

export default LoginUser;
