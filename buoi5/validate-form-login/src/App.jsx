import React, { useState } from "react";
import "./App.css";

function App() {
  const MESSAGE_ERROR = {
    email: "Email error",
    password: "Password error",
  };

  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/,
  };

  const [form, setForm] = useState({});

  const handleChange = (event) => {
    let error = REGEX[event.target.name].test(event.target.value)
      ? ""
      : MESSAGE_ERROR[event.target.name];

    setForm({
      ...form,
      [event.target.name]: { value: event.target.value, error: error },
    });
  };

  function handleSubmit() {
    const isFilled =
      form.email && form.email.value && form.password && form.password.value;

    const isError = isFilled && (form.email.error || form.password.error);

    alert(
      isFilled && !isError
        ? "Đăng ký thành công"
        : "Đăng nhập không thành công. Hãy điền thông tin đầy đủ!"
    );
  }

  return (
    <>
      <div>
        <h1>Login</h1>
        <form>
          <div
            className={`custom-input ${
              form.email && form.email.error && "custom-input-error"
            }`}
          >
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              value={(form.email && form.email.value) || ""}
              onChange={handleChange}
            />
            {form.email && form.email.error && (
              <p className="error">{form.email.error}</p>
            )}
          </div>

          <div
            className={`custom-input ${
              form.password && form.password.error && "custom-input-error"
            }`}
          >
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={(form.password && form.password.value) || ""}
              onChange={handleChange}
            />
            {form.password && form.password.error && (
              <p className="error">{form.password.error}</p>
            )}
          </div>

          <button type="submit" onClick={handleSubmit}>
            Đăng Nhập
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
