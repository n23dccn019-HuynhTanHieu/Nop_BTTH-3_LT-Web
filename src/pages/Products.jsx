import { useState } from "react";
import "../App.css";

function Products() {
  // 1. Dữ liệu sản phẩm
  const allProducts = [
    { id: 1, name: "iPhone 17 Pro Max 512GB", brand: "Apple", price: "43.990.000đ", img: "/images/iPhone 17 Pro Max 512GB.webp" },
    { id: 2, name: "Samsung Galaxy A06 5G 4GB/64GB", brand: "Samsung", price: "2.390.000đ", img: "/images/Samsung Galaxy A06 5G 4GB_64GB.webp" },
    { id: 3, name: "Xiaomi 15 5G 12GB 256GB", brand: "Xiaomi", price: "18.490.000đ", img: "images/Xiaomi 15 5G 12GB 256GB.webp" },
    { id: 4, name: "OPPO A3 8GB/256GB", brand: "Oppo", price: "4.490.000đ", img: "/images/OPPO A3 8GB_256GB.webp" },
    { id: 5, name: "iPhone 16e 128GB", brand: "Apple", price: "16.790.000đ", img: "/images/iPhone 16e 128GB.webp" },
    { id: 6, name: "Samsung Galaxy A07 4GB/128GB", brand: "Samsung", price: "2.690.000đ", img: "images/Samsung Galaxy A07 4GB_128GB.webp" },
    { id: 7, name: "Xiaomi 15T 5G 12GB/512GB", brand: "Xiaomi", price: "14.490.000đ", img: "images/Xiaomi 15T 5G 12GB_512GB.webp" },
    { id: 8, name: "OPPO A6 Pro 8GB/128GB.webp", brand: "Oppo", price: "6.490.000đ", img: "images/OPPO A6 Pro 8GB_128GB.webp" },
  ];

  // 2. State để lưu hãng đang được chọn (Mặc định là 'All' - hiện tất cả)
  const [filter, setFilter] = useState("All");

  // 3. Hàm lọc sản phẩm dựa trên State
  const filteredProducts = filter === "All" 
    ? allProducts 
    : allProducts.filter(item => item.brand === filter);

  return (
    <div className="container">
      <h2 className="section-title">Danh mục sản phẩm</h2>

      {/* CÁC NÚT BẤM CHỌN MỤC */}
      <div className="filter-buttons">
        <button className={filter === "All" ? "active" : ""} onClick={() => setFilter("All")}>Tất cả</button>
        <button className={filter === "Apple" ? "active" : ""} onClick={() => setFilter("Apple")}>Apple</button>
        <button className={filter === "Samsung" ? "active" : ""} onClick={() => setFilter("Samsung")}>Samsung</button>
        <button className={filter === "Xiaomi" ? "active" : ""} onClick={() => setFilter("Xiaomi")}>Xiaomi</button>
        <button className={filter === "Oppo" ? "active" : ""} onClick={() => setFilter("Oppo")}>Oppo</button>
      </div>

      {/* HIỂN THỊ DANH SÁCH ĐÃ LỌC */}
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.img} alt={item.name} />
              <h4>{item.name}</h4>
              <p className="price">{item.price}</p>
              <button className="btn-add">Mua ngay</button>
            </div>
          ))
        ) : (
          <p>Không có sản phẩm nào thuộc mục này.</p>
        )}
      </div>
    </div>
  );
}

export default Products;