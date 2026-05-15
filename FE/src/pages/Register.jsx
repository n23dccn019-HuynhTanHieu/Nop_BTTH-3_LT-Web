import { useState } from "react";
import { register } from "../api/authApi";
import "../App.css";

function Register() {
  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = () => {
    register(form)
      .then(() => {
        alert("Đăng ký thành công");
      })
      .catch(err => {
        alert("Username đã tồn tại");
      });
  };

  return (
    <div className="auth-container">
      <h2>Đăng ký</h2>

      <div>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
      />
      </div>

      <div>
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      </div>

      <div>
      <button onClick={handleRegister}>
        Đăng ký
      </button>
      </div>
    </div>
  );
}

export default Register;