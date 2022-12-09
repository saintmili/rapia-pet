import React, { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";

import "../styles/profilepage.styles.css";

const ProfilePage = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="profilepage">
      {user
        ? Object.keys(user).map((key) => (
            <div key={key}>
              {key}: {user[key]}
            </div>
          ))
        : ""}
    </div>
  );
};

export default ProfilePage;
