import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

function Products() {

    const API_URL = "http://localhost:5000/api/products";

    // Danh sách sản phẩm
    const [products, setProducts] = useState([]);

    // Form thêm/sửa
    const [formData, setFormData] = useState({
      id: 0,
      name: "",
      brand: "",
      price: "",
      image: ""
    });

    // Kiểm tra đang edit hay add
    const [isEditing, setIsEditing] = useState(false);

    const [filter, setFilter] = useState("All");

    // Load dữ liệu
    useEffect(() => {
      fetchProducts();
    }, []);

    // Lấy dữ liệu
    const fetchProducts = async () => {
      try {

        const response = await axios.get(API_URL);

        setProducts(response.data);

      } catch (error) {

        console.log(error);

      }
    };

    //Lọc sản phẩm
    const filteredProducts =
      filter === "All"
        ? products
        : products.filter(
            (item) => item.brand === filter
          );

    // Nhập form
    const handleChange = (e) => {

      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });

    };

    // Thêm sản phẩm
    const addProduct = async () => {

      try {

        await axios.post(API_URL, {
          name: formData.name,
          brand: formData.brand,
          price: Number(formData.price),
          image: formData.image
        });

        fetchProducts();

        resetForm();

      } catch (error) {

        console.log(error);

      }
    };

    // Chọn sản phẩm để sửa
    const editProduct = (product) => {

      setFormData(product);

      setIsEditing(true);

    };

    // Update
    const updateProduct = async () => {

      try {

        await axios.put(
          `${API_URL}/${formData.id}`,
          formData
        );

        fetchProducts();

        resetForm();

      } catch (error) {

        console.log(error);

      }
    };

    // Xóa
    const deleteProduct = async (id) => {

      if (!window.confirm("Bạn có chắc muốn xóa?"))
        return;

      try {

        await axios.delete(`${API_URL}/${id}`);

        fetchProducts();

      } catch (error) {

        console.log(error);

      }
    };

    // Reset form
    const resetForm = () => {

      setFormData({
        id: 0,
        name: "",
        brand: "",
        price: "",
        image: ""
      });

      setIsEditing(false);

    };

    // Format tiền
    const formatPrice = (price) => {

      return Number(price).toLocaleString("vi-VN") + "đ";

    };

    return (
      <div className="products-container">

        <h2>Quản lý sản phẩm</h2>

        {/* FORM */}
        <div className="form-box">

          <input
            type="text"
            name="name"
            placeholder="Tên sản phẩm"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="brand"
            placeholder="Hãng"
            value={formData.brand}
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            placeholder="Giá"
            value={formData.price}
            onChange={handleChange}
          />

          <input
            type="text"
            name="image"
            placeholder="/images/abc.webp"
            value={formData.image}
            onChange={handleChange}
          />

          {isEditing ? (
            <button onClick={updateProduct}>
              Cập nhật
            </button>
          ) : (
            <button onClick={addProduct}>
              Thêm sản phẩm
            </button>
          )}

        </div>

        <div className="filter-buttons">

          <button
            className={filter === "All" ? "active" : ""}
            onClick={() => setFilter("All")}
          >
            Tất cả
          </button>

          <button
            className={filter === "Apple" ? "active" : ""}
            onClick={() => setFilter("Apple")}
          >
            Apple
          </button>

          <button
            className={filter === "Samsung" ? "active" : ""}
            onClick={() => setFilter("Samsung")}
          >
            Samsung
          </button>

          <button
            className={filter === "Xiaomi" ? "active" : ""}
            onClick={() => setFilter("Xiaomi")}
          >
            Xiaomi
          </button>

          <button
            className={filter === "Oppo" ? "active" : ""}
            onClick={() => setFilter("Oppo")}
          >
            Oppo
          </button>

        </div>

        {/* DANH SÁCH */}
        <div className="product-grid">

          {filteredProducts.map((item) => (

            <div
              key={item.id}
              className="product-card"
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <h4>{item.name}</h4>

              <p>{item.brand}</p>

              <p className="price">
                {formatPrice(item.price)}
              </p>

              <div className="action-buttons">

                <button
                  className="btn-edit"
                  onClick={() => editProduct(item)}
                >
                  Sửa
                </button>

                <button
                  className="btn-delete"
                  onClick={() => deleteProduct(item.id)}
                >
                  Xóa
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    );
  }

export default Products;