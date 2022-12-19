import React from "react";

import "./menu.styles.css";
import dropDown from "../../assets/dropDown.svg";

export const Menu = (props) => {
  return (
    <div className="menu">
      <div className="menu-item">
        <div className="menu-item-title">غذا سگ</div>
        <div className="menu-item-dropdown">
          <img src={dropDown} alt="dropDown" />
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-item-title">قلاده سگ</div>
        <div className="menu-item-dropdown">
          <img src={dropDown} alt="dropDown" />
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-item-title">اسباب بازی</div>
        <div className="menu-item-dropdown">
          <img src={dropDown} alt="dropDown" />
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-item-title">لوازم بهداشتی</div>
        <div className="menu-item-dropdown">
          <img src={dropDown} alt="dropDown" />
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-item-title">لوازم تعلیمی آموزشی</div>
        <div className="menu-item-dropdown">
          <img src={dropDown} alt="dropDown" />
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-item-title">لانه و تخت سگ</div>
        <div className="menu-item-dropdown">
          <img src={dropDown} alt="dropDown" />
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-item-title">ظرف آب و غذا</div>
        <div className="menu-item-dropdown">
          <img src={dropDown} alt="dropDown" />
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-item-title">ویتامین سگ</div>
        <div className="menu-item-dropdown">
          <img src={dropDown} alt="dropDown" />
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-item-title">وبلاگ</div>
        <div className="menu-item-dropdown">
          <img src={dropDown} alt="dropDown" />
        </div>
      </div>
    </div>
  );
};

