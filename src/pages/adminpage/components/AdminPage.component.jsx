import React from "react";

import "../styles/AdminPage.styles.css";

import AdminHeader from "./AdminHeader.component";
import Sidebar from "./sidebar.component";
import AdminProducts from "./AdminProducts.component";
import { useState } from "react";
import Laptop from "@/assets/imgs/admin/laptop.svg";
import Home from "@/assets/imgs/admin/home.svg";
import Pages from "@/assets/imgs/admin/pages.svg";
import Blog from "@/assets/imgs/admin/blog.svg";
import Shop from "@/assets/imgs/admin/shop.svg";
import Users from "@/assets/imgs/admin/users.svg";
import Files from "@/assets/imgs/admin/files.svg";

const AdminPage = () => {
  const [selectedItem, setSelectedItem] = useState();

  const items = [
    {
      id: 1,
      title: "مشاهده وب سایت",
      icon: Laptop,
      component: "",
    },
    { id: 2, title: "پیشخوان", icon: Home, component: "" },
    { id: 3, title: "صفحه ها", icon: Pages, component: "" },
    { id: 4, title: "وبلاگ", icon: Blog, component: "" },
    { id: 5, title: "فروشگاه", icon: Shop, component: <AdminProducts /> },
    { id: 6, title: "کاربران", icon: Users, component: "" },
    { id: 7, title: "مدیریت فایل ها", icon: Files, component: "" },
  ];

  return (
    <div className="adminpage">
      <AdminHeader />
      <div className="adminpage-content">
        <div className="adminpage-sidebar">
          <Sidebar
            items={items}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </div>
        <div className="sidebar-content">
          {selectedItem ? selectedItem.component : "no"}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
