import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom"
import { setCurrentUser } from "../../redux/user/user.actions";

const LogoutPage = props => {
    props.setCurrentUser(null)
    return <Navigate to="/" />
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: currentUser => dispatch(setCurrentUser(currentUser))
})

export default connect(null, mapDispatchToProps)(LogoutPage);