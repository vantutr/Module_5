import { useLocation, Navigate } from "react-router-dom";
function Home() {
  // Hook để lấy dữ liệu được truyền qua state
  const location = useLocation();

  // Kiểm tra xem có dữ liệu người dùng không, nếu không thì điều hướng về trang login
  if (!location.state?.user) {
    return <Navigate to="/" />;
  }

  const { user } = location.state;

  return (
    <div className="container">
      <h2>Home</h2>
      <p className="home-text">
        Welcome, <span className="home-email">{user.email}</span>!
      </p>
    </div>
  );
}

export default Home;
