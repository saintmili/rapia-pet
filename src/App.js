import './App.css';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage.component';
import ProductsPage from './pages/productspage/productspage.component';

function App() {
  return (
    <div className='rabia-pet'>
      <Routes >
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/products' element={<ProductsPage/>} />
        <Route path='/products/:productId' />
      </Routes>
    </div>
  );
}

export default App;
