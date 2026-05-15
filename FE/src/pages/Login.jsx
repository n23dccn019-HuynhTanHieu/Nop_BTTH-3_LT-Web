import { useState } from "react";
import { login } from "../api/authApi";
import "../App.css";

function Login() {
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

  const handleLogin = () => {
    login(form)
      .then(res => {
        alert("Đăng nhập thành công");
        console.log(res.data);
      })
      .catch(err => {
        alert("Sai tài khoản hoặc mật khẩu");
      });
  };

  return (
    <div className="auth-container">
        <h2>Đăng nhập</h2>

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
        <button onClick={handleLogin}>
            Đăng nhập
        </button>
        </div>
    </div>
    );
}

export default Login;