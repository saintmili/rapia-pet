import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer';

import HomePage from './pages/homepage.component';
import ProductsPage from './pages/productspage/productspage.component';
import ProductPage from './pages/productpage';
import AdminPage from './pages/adminpage/adminpage.component';
import AdminProductPage from './pages/adminproductpage/admin-product.component';
import LoginPage from './pages/loginpage';
import LogoutPage from './pages/logoutpage/logoutpage.component';
import BlogPage from './pages/blogpage';
import RegisterPage from './pages/registerpage';
import ProfilePage from './pages/profilepage';

function App() {
  return (
    <div className="rabia-pet">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/products" element={<ProductsPage />} />
        <Route path="/products/:productSlug" element={<ProductPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/product" element={<AdminProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
