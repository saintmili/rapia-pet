import React, { useContext, useState } from "react";
import { register } from "../../../api/authentication";
import { useNavigate } from "react-router-dom";
import Form from "../../../components/form";

import "../styles/registerpage.styles.css";
import { UserContext } from "../../../contexts/userContext";

const RegisterPage = () => {
  const [setUser] = useContext(UserContext);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const registerHandler = (e) => {
    e.preventDefault();
    register(firstName, lastName, userName, email, password)
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
    { id: "firstname", type: "text", text: "نام:", onchange: setFirstName },
    {
      id: "lastname",
      type: "text",
      text: "نام خانوادگی:",
      onchange: setLastName,
    },
    {
      id: "username",
      type: "text",
      text: "نام کاربری:",
      onchange: setUserName,
    },
    { id: "email", type: "email", text: "ایمیل:", onchange: setEmail },
    { id: "password", type: "password", text: "رمز:", onchange: setPassword },
    { id: "submit", type: "submit", text: "ثبت نام", onclick: registerHandler },
  ];
  return (
    <div className="registerpage">
      <Form formData={formData} />
    </div>
  );
};

export default RegisterPage;
