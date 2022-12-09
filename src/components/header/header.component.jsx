import React, { useContext } from "react";

import { NavBar } from "../navbar/navbar.component";
import { Menu } from "../menu/menu.component";

import "./header.styles.css";
import { UserContext } from "../../contexts/userContext";
import { CustomButton } from "../custom-button/custom-button.component";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header className="header">
      {user && user.is_admin && (
        <Link to={"/admin"}>
          <CustomButton>adminPage</CustomButton>
        </Link>
      )}
      <NavBar />
      <Menu />
    </header>
  );
};

export default Header;

