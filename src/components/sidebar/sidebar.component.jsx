import React from "react";

import './sidebar.styles.css';

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            {props.items.map(item => (
                <div className="sidebar-item" key={item.id} onClick={() => {props.setSelectedItem(item)}}>
                    {item.title}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
