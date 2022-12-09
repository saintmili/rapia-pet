import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

const LogoutPage = () => {
  const { setUser } = useContext(UserContext);
  setUser("");
  return <Navigate to="/" />;
};

export default LogoutPage;
