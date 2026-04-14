// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        {/* Navbar sẽ luôn xuất hiện ở đầu tất cả các trang */}
        <header className="navbar">
          <h1 className="logo">My-Shop</h1>
          <Navbar /> 
        </header>

        <Routes>
          {/* Khi URL là / thì hiện trang Trang chủ */}
          <Route path="/" element={<Home />} />
          
          {/* Khi URL là /product thì hiện trang Sản phẩm */}
          <Route path="/products" element={<Products />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer style={{ textAlign: 'center', padding: '20px', marginTop: '20px' }}>
          <p>© 2026 My-Shop Project. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;