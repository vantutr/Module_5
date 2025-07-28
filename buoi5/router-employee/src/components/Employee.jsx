import React from "react";
import { useNavigate } from "react-router-dom";

const employees = [
  { id: 1, name: "Hoa", age: 20 },
  { id: 2, name: "Khánh", age: 25 },
  { id: 3, name: "Tú", age: 22 },
];

function Employee() {
  const navigate = useNavigate();

  const handleViewDetail = (employee) => {
    // Chuyển sang trang detail và truyền object employee qua state
    navigate("/employee-detail", { state: { employeeData: employee } });
  };

  return (
    <div className="container">
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>
                <button
                  onClick={() => handleViewDetail(emp)}
                  className="detail-btn"
                >
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
