import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
function Login() {
  // Hook để điều hướng
  const navigate = useNavigate();

  const handleLogin = (values) => {
    // Kiểm tra tài khoản
    if (values.email === "admin@gmail.com" && values.password === "123456") {
      // và truyền dữ liệu account qua state
      alert("Login successfully!");
      navigate("/home", { state: { user: values } });
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={handleLogin}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              type="email"
              id="email"
              className="form-control"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              type="password"
              id="password"
              className="form-control"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>
          <button type="submit" className="submit-btn">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
