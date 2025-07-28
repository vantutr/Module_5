import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Employee from "./components/Employee";
import EmployeeDetail from "./components/EmployeeDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/employees" element={<Employee />} />
          <Route path="/employee-detail" element={<EmployeeDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
