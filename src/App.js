import './App.css';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage.component';
import ProductsPage from './pages/productspage/productspage.component';
import ProductPage from './pages/productpage/productpage.component';
import AdminPage from './pages/adminpage/adminpage.component';
import AdminProductPage from './pages/adminproductpage/admin-product.component';
import LoginPage from './pages/loginpage/loginpage.component';

function App() {
  return (
    <div className='rabia-pet'>
      <Routes >
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/products' element={<ProductsPage />} />
        <Route path='/products/:productSlug' element={<ProductPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/admin/product' element={<AdminProductPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
