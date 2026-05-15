// src/pages/Home.jsx
import '../App.css'

function Home() {
  const products = [
    { id: 1, name: "iPhone 17 Pro Max 512GB", price: "43.990.000đ", img: "/images/iPhone 17 Pro Max 512GB.webp" },
    { id: 2, name: "Samsung Galaxy A06 5G 4GB/64GB", price: "2.390.000đ", img: "/images/Samsung Galaxy A06 5G 4GB_64GB.webp" },
    { id: 3, name: "Xiaomi 15 5G 12GB 256GB", price: "18.490.000đ", img: "images/Xiaomi 15 5G 12GB 256GB.webp" },
    { id: 4, name: "OPPO A3 8GB/256GB", price: "4.490.000đ", img: "/images/OPPO A3 8GB_256GB.webp" },
  ];

  return (
    <div className="container">

      {/* Hero Section */}
      <section className="hero">
        <h2>Chào mừng đến với cửa hàng của chúng tôi</h2>
        <p>Khám phá bộ sưu tập mới nhất với giá ưu đãi.</p>
        <button className="btn-shop">Mua ngay</button>
      </section>

      {/* Product Grid */}
      <main>
        <h3 className="section-title">Sản phẩm nổi bật</h3>
        <div className="product-grid">
          {products.map(item => (
            <div key={item.id} className="product-card">
              <img src={item.img} alt={item.name} />
              <h4>{item.name}</h4>
              <p className="price">{item.price}</p>
              <button className="btn-add">Thêm vào giỏ</button>
            </div>
          ))}
        </div>
    </main>
    </div>
  );
}

export default Home;