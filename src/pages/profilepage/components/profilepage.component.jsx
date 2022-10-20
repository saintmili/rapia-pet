import React from "react";
import { connect } from "react-redux/es/exports";
import { setCurrentUser } from "../../../redux/user/user.actions";

import "../styles/profilepage.styles.css";

const ProfilePage = (props) => {
    return (
        <div className="profilepage">
            {props.currentUser ? Object.keys(props.currentUser).map(key => <div key={key}>{key}: {props.currentUser[key]}</div>): ""}
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

// export default ProfilePage;