import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/style.css";
import "./css/login_register.css";
function Auth() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [message, setMessage] = useState("");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeTab = (tabName) => {
    setActiveTab(tabName);
    setMessage("");
  };

  const handleLoginChange = (event) => {
    const { name, value, checked, type } = event.target;

    setLoginData((previousData) => ({
      ...previousData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRegisterChange = (event) => {
    const { name, value } = event.target;

    setRegisterData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    if (!loginData.email.trim() || !loginData.password.trim()) {
      setMessage("Vui lòng nhập đầy đủ email và mật khẩu.");
      return;
    }

    setMessage("");

    console.log("Dữ liệu đăng nhập:", loginData);

    // Bước sau mới nối API:
    // authController.login(loginData);
    // hoặc authService.login(loginData);
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();

    if (
      !registerData.name.trim() ||
      !registerData.email.trim() ||
      !registerData.password.trim() ||
      !registerData.confirmPassword.trim()
    ) {
      setMessage("Vui lòng nhập đầy đủ thông tin đăng ký.");
      return;
    }

    if (registerData.password !== registerData.confirmPassword) {
      setMessage("Mật khẩu nhập lại không khớp.");
      return;
    }

    setMessage("");

    console.log("Dữ liệu đăng ký:", registerData);

    // Bước sau mới nối API:
    // authController.register(registerData);
    // hoặc authService.register(registerData);
  };

  return (
    <main className="auth-preview">
      <div className="auth-modal is-open">
        <button
          className="auth-backdrop"
          type="button"
          aria-label="Quay về trang chủ"
          onClick={() => navigate("/")}
        />

        <section className="auth-card" aria-label="Tài khoản">
          <button
            className="auth-close"
            type="button"
            aria-label="Đóng"
            onClick={() => navigate("/")}
          >
            &times;
          </button>

          <div className="auth-heading">
            <h1>Tài khoản</h1>
            <p>
              Đăng nhập hoặc tạo tài khoản để theo dõi đơn hàng nhanh hơn.
            </p>
          </div>

          <div className="auth-tabs" role="tablist" aria-label="Chọn biểu mẫu">
            <button
              className={`auth-tab ${
                activeTab === "login" ? "active" : ""
              }`}
              type="button"
              role="tab"
              aria-selected={activeTab === "login"}
              onClick={() => changeTab("login")}
            >
              Đăng nhập
            </button>

            <button
              className={`auth-tab ${
                activeTab === "register" ? "active" : ""
              }`}
              type="button"
              role="tab"
              aria-selected={activeTab === "register"}
              onClick={() => changeTab("register")}
            >
              Đăng ký
            </button>
          </div>

          {message && <p className="auth-message">{message}</p>}

          <form
            className={`auth-form ${
              activeTab === "login" ? "active" : ""
            }`}
            onSubmit={handleLoginSubmit}
          >
            <div className="auth-field">
              <label htmlFor="loginEmail">Email</label>
              <input
                id="loginEmail"
                name="email"
                type="email"
                placeholder="Nhập email của bạn"
                value={loginData.email}
                onChange={handleLoginChange}
              />
            </div>

            <div className="auth-field">
              <label htmlFor="loginPassword">Mật khẩu</label>
              <input
                id="loginPassword"
                name="password"
                type="password"
                placeholder="Nhập mật khẩu"
                value={loginData.password}
                onChange={handleLoginChange}
              />
            </div>

            <label className="remember-row">
              <input
                name="remember"
                type="checkbox"
                checked={loginData.remember}
                onChange={handleLoginChange}
              />
              <span>Ghi nhớ đăng nhập</span>
            </label>

            <button className="auth-submit" type="submit">
              Đăng nhập
            </button>

            <div className="auth-links">
              <button
                className="auth-link-button"
                type="button"
                onClick={() => alert("Chức năng quên mật khẩu đang phát triển.")}
              >
                Quên mật khẩu?
              </button>

              <button
                className="auth-link-button"
                type="button"
                onClick={() => changeTab("register")}
              >
                Tạo tài khoản mới
              </button>
            </div>
          </form>

          <form
            className={`auth-form ${
              activeTab === "register" ? "active" : ""
            }`}
            onSubmit={handleRegisterSubmit}
          >
            <div className="auth-field">
              <label htmlFor="registerName">Họ và tên</label>
              <input
                id="registerName"
                name="name"
                type="text"
                placeholder="Nhập họ tên của bạn"
                value={registerData.name}
                onChange={handleRegisterChange}
              />
            </div>

            <div className="auth-field">
              <label htmlFor="registerEmail">Email</label>
              <input
                id="registerEmail"
                name="email"
                type="email"
                placeholder="Nhập email của bạn"
                value={registerData.email}
                onChange={handleRegisterChange}
              />
            </div>

            <div className="auth-field">
              <label htmlFor="registerPassword">Mật khẩu</label>
              <input
                id="registerPassword"
                name="password"
                type="password"
                placeholder="Tạo mật khẩu"
                value={registerData.password}
                onChange={handleRegisterChange}
              />
            </div>

            <div className="auth-field">
              <label htmlFor="registerConfirm">Nhập lại mật khẩu</label>
              <input
                id="registerConfirm"
                name="confirmPassword"
                type="password"
                placeholder="Nhập lại mật khẩu"
                value={registerData.confirmPassword}
                onChange={handleRegisterChange}
              />
            </div>

            <button className="auth-submit" type="submit">
              Đăng ký
            </button>

            <div className="auth-links single">
              <button
                className="auth-link-button"
                type="button"
                onClick={() => changeTab("login")}
              >
                Đã có tài khoản? Đăng nhập
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Auth;