import "./App.css";
import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import ProductsPage from "./pages/productspage";
import ProductPage from "./pages/productpage";
import AdminPage from "./pages/adminpage";
import AdminProductPage from "./pages/adminproductpage";
import LoginPage from "./pages/loginpage";
import LogoutPage from "./pages/logoutpage";
import BlogPage from "./pages/blogpage";
import RegisterPage from "./pages/registerpage";
import ProfilePage from "./pages/profilepage";
import { UserContext, UserProvider } from "./contexts/userContext";
import AdminProtected from "./routes/AdminProtected";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="rabia-pet">
      <UserProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/products" element={<ProductsPage />} />
          <Route path="/products/:productSlug" element={<ProductPage />} />
          <Route
            path="/admin"
            element={
              <AdminProtected user={user}>
                <AdminPage />
              </AdminProtected>
            }
          />
          <Route path="/admin/product" element={<AdminProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
