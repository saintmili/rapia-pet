import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/loginpage.styles.css";

import { login } from "../../../api/authentication";
import { connect } from "react-redux";
import { setCurrentUser } from "../../../redux/user/user.actions";
import Form from "../../../components/form";

const LoginPage = (props) => {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    const loginHandler = (e) => {
        e.preventDefault();
        login(userName, password)
            .then((res) => {
                if (res.status === "ok") {
                    props.setCurrentUser(res.data);
                    navigate("/", {replace: true});
                } else {
                    console.log(res.data);
                }
            })
            .catch(err => console.error(err))
    }

    const formData = [
        {id: "username", type: "text", text: "نام کاربری:", onchange: setUserName},
        {id: "password", type: "password", text: "رمز:", onchange: setPassword},
        {id: "submit", type: "submit", text: "ورود", onclick: loginHandler}
    ]

    return (
        <div className="loginpage">
            <Form formData={formData}/>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: currentUser => dispatch(setCurrentUser(currentUser))
})
export default connect(null, mapDispatchToProps)(LoginPage);
