import React, { useContext } from "react";

import NavBar from "../navbar";
import Menu from "../menu";

import "./header.styles.css";
import { UserContext } from "../../contexts/userContext";
import CustomButton from "@/common/components/CustomButton";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();

  if (location.pathname !== "/admin") {
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
  }
};

export default Header;
