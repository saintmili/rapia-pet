import React from "react";

import "../styles/AdminPage.styles.css";

import AdminHeader from "./AdminHeader.component";
import Sidebar from "@/components/sidebar";
import AdminProducts from "@/components/admin-products";
import { useState } from "react";

const AdminPage = () => {
  const [selectedItem, setSelectedItem] = useState();

  const items = [
    { id: 1, title: "محصولات", component: <AdminProducts /> },
    { id: 2, title: "دسته بندی ها", component: "" },
  ];

  return (
    <div className="adminpage">
      <AdminHeader />
      <div className="adminpage-content">
      <div className="adminpage-sidebar">
        <Sidebar items={items} setSelectedItem={setSelectedItem} />
      </div>
      <div className="sidebar-content">
        {selectedItem ? selectedItem.component : "no"}
      </div>
      </div>
    </div>
  );
};

export default AdminPage;
