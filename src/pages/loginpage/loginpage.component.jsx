import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./loginpage.styles.css";

import { login } from "../../api/authentication";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions";

const LoginPage = (props) => {
    const [id, setId] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    const loginHandler = () => {
        console.log(id, password);
        login(parseInt(id), password)
            .then((data) => {
                props.setCurrentUser(data);
                navigate("/", {replace: true});
            })
            .catch(err => console.error(err))
    }
    return (
        <div className="loginpage">
            <form className="loginpage-form">
                <label>
                    id:
                    <input type="text" onChange={(e) => setId(e.target.value)} />
                </label>
                <label>
                    password:
                    <input type="text" onChange={(e) => setPassword(e.target.value)} />
                </label>
            </form>
            <button onClick={loginHandler}>Login</button>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: currentUser => dispatch(setCurrentUser(currentUser))
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
