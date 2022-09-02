import './App.css';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage.component';
import ProductsPage from './pages/productspage/productspage.component';
import ProductPage from './pages/productpage/productpage.component';
import AdminPage from './pages/adminpage/adminpage.component';

function App() {
  return (
    <div className='rabia-pet'>
      <Routes >
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/products' element={<ProductsPage />} />
        <Route path='/products/:productSlug' element={<ProductPage />} />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
