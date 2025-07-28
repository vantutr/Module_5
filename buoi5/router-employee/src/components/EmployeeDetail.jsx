import React from "react";
import { useLocation, Navigate, Link } from "react-router-dom";
function EmployeeDetail() {
  const location = useLocation();

  // Kiểm tra xem có dữ liệu được truyền qua không, nếu không thì về trang chính
  if (!location.state?.employeeData) {
    return <Navigate to="/employees" />;
  }

  const { employeeData } = location.state;

  return (
    <div className="container">
      <h2>Employee Detail</h2>
      <div className="detail-card">
        <p>
          <strong>ID:</strong> {employeeData.id}
        </p>
        <p>
          <strong>Name:</strong> {employeeData.name}
        </p>
        <p>
          <strong>Age:</strong> {employeeData.age}
        </p>
      </div>
      <Link to="/employees" className="back-link">
        ← Back to List
      </Link>
    </div>
  );
}

export default EmployeeDetail;
