import React from "react";

import "./adminpage.styles.css";

import Sidebar from "../../components/sidebar/sidebar.component";
import AdminProducts from "../../components/admin-products/admin-products.component";
import { useState } from "react";

const AdminPage = () => {
  const [selectedItem, setSelectedItem] = useState();

  const items = [
    { id: 1, title: "محصولات", component: <AdminProducts /> },
    { id: 2, title: "دسته بندی ها", component: "" },
  ];

  return (
    <div className="adminpage">
      <div className="adminpage-sidebar">
        <Sidebar items={items} setSelectedItem={setSelectedItem} />
      </div>
      <div className="adminpage-content">
        {selectedItem ? selectedItem.component : "no"}
      </div>
    </div>
  );
};

export default AdminPage;

