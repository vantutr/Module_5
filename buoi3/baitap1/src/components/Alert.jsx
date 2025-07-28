import React from "react";
import PropTypes from "prop-types";

function Alert({ text, type = "warning" }) {
  // Thêm prop 'type' với giá trị mặc định là 'warning'
  const alertClass = `alert alert-${type}`; // Tạo class dựa trên 'type'

  return (
    <div className={alertClass} role="alert">
      {/* Có thể thay đổi "Cảnh báo!" tùy theo 'type' nếu muốn */}
      {type === "warning" ? "Cảnh báo! " : ""}
      {text}
    </div>
  );
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]), // Chỉ cho phép các giá trị Bootstrap alert type
};

export default Alert;
