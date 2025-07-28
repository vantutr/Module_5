// src/App.jsx
import Alert from "./components/Alert";
import "./App.css";

function App() {
  return (
    <div className="container mt-5">
      <h1>Ví dụ Alert Component</h1>
      <Alert text="Tài nguyên bạn vừa truy cập không tồn tại." type="warning" />

      <hr className="my-4" />

      <h2>Các Alert khác</h2>
      <Alert text="Đăng nhập thành công!" type="success" />
      <Alert text="Đã có lỗi xảy ra!" type="danger" />
      <Alert text="Thông tin quan trọng!" type="info" />
    </div>
  );
}

export default App;
