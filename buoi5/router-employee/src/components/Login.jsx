import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (values) => {
    if (values.email === "admin@gmail.com" && values.password === "123456") {
      alert("Login successfully!");
      navigate("/employees");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="container login-container">
      <h1>Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
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
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              type="password"
              id="password"
              className="form-control"
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
