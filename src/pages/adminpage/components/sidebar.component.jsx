import React from "react";

import "../styles/sidebar.styles.css";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      {props.items.map((item) => (
        <div
          className={`sidebar-item ${
            item && props.selectedItem && item.id === props.selectedItem.id
              ? "active"
              : ""
          }`}
          key={item.id}
          onClick={() => {
            props.setSelectedItem(item);
          }}
        >
          {item.icon && <img src={item.icon} className="sidebar-item-icon" />}
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
