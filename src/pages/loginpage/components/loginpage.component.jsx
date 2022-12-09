import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/loginpage.styles.css";

import { login } from "../../../api/authentication";
import Form from "../../../components/form";
import { UserContext } from "../../../contexts/userContext";

const LoginPage = () => {
  const { setUser } = useContext(UserContext);
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    login(userName, password)
      .then((res) => {
        if (res.status === "ok") {
          setUser(res.data);
          navigate("/", { replace: true });
        } else {
          console.log(res.data);
        }
      })
      .catch((err) => console.error(err));
  };

  const formData = [
    {
      id: "username",
      type: "text",
      text: "نام کاربری:",
      onchange: setUserName,
    },
    { id: "password", type: "password", text: "رمز:", onchange: setPassword },
    { id: "submit", type: "submit", text: "ورود", onclick: loginHandler },
  ];

  return (
    <div className="loginpage">
      <Form formData={formData} />
    </div>
  );
};

export default LoginPage;
