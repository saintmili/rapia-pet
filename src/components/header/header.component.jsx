import React from "react";

import { NavBar } from "../navbar/navbar.component";
import { Menu } from "../menu/menu.component";

import './header.styles.css';

export const Header = (props) => {
    return (
        <header className='header'>
            <NavBar />
            <Menu />
        </header>
    )
}