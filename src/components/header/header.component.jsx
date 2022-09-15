import React from "react";
import { connect } from "react-redux";

import { NavBar } from "../navbar/navbar.component";
import { Menu } from "../menu/menu.component";

import './header.styles.css';

const Header = ({ currentUser }) => {
    return (
        <header className='header'>
            <NavBar />
            <Menu />
        </header>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)