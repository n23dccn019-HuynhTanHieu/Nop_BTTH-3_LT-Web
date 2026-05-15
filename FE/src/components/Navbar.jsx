// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{padding: '20px', background: '#eee'}}>
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>

        <li><Link to="/products">Sản phẩm</Link></li>
        <li><Link to="/login">Đăng nhập</Link></li>
        <li><Link to="/register">Đăng ký</Link></li>
        <li><Link to="/contact">Liên hệ</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;