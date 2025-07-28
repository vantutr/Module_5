import { useState } from "react";
import { Formik } from "formik";
import "./App.css";

function App() {
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };
  const [form, setForm] = useState({});

  const handleChange = (even) => {
    setForm({
      ...form,
      [even.target.name]: even.target.value,
    });
  };

  const handleValidate = () => {
    const error = {};
    if (!form.email) {
      error.email = "Required";
    } else if (!REGEX.email.test(form.to)) {
      error.email = "Invalid email address";
    }

    if (!form.title) {
      error.title = "Required";
    }

    if (!form.message) {
      error.message = "Required";
    }
  };

  const handleSubmit = () => {
    alert("Gửi mail thành công");
  };

  return (
    <>
      <div>
        <h1>Mail form</h1>
        <Formik
          initialValues={form}
          validate={handleValidate}
          onSubmit={handleSubmit}
        >
          {({ errors, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div
                className={`custom-input ${
                  errors.email ? "custom-input-error" : ""
                }`}
              >
                <label>To</label>
                <input
                  type="text"
                  name="email"
                  value={form.email || ""}
                  onChange={handleChange}
                />
                <p className="error">{errors.email}</p>
              </div>
              <div
                className={`custom-input ${
                  errors.title ? "custom-input-error" : ""
                }`}
              >
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={form.title || ""}
                  onChange={handleChange}
                />
                <p className="error">{errors.title}</p>
              </div>

              <div
                className={`custom-input ${
                  errors.message ? "custom-input-error" : ""
                }`}
              >
                <label>Message</label>
                <textarea
                  name="message"
                  value={form.message || ""}
                  onChange={handleChange}
                />
                <p className="error">{errors.message}</p>
              </div>

              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default App;
