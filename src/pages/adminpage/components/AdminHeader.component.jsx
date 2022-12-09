import React from "react";
import Logo from "@/assets/imgs/admin/rabiapet-admin.svg";
import Moon from "@/assets/imgs/admin/moon.svg";

import "../styles/AdminHeader.styles.css";
import CustomButton from "@/common/components/CustomButton";

const AdminHeader = () => {
  return (
    <div className="admin-header">
      <img
        className="admin-logo"
        src={Logo}
        style={{ width: "13vw", height: "8vw" }}
      />
      <div className="welcome-text">مدیر عزیز، خوش آمدی.</div>
      <div className="btns-box">
        <img className="theme-btn" src={Moon} />|<CustomButton>Hi</CustomButton>
      </div>
    </div>
  );
};

export default AdminHeader;
