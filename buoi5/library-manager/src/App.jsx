import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./App.css";

export default function App() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ title: "", quantity: "" });
  const [indexSelected, setIndexSelected] = useState(-1);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleValidate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Required";
    }
    if (!values.quantity) {
      errors.quantity = "Required";
    } else if (!/^\d+$/.test(values.quantity)) {
      errors.quantity = "Số lượng chỉ cho phép nhập số";
    }
    return errors;
  };

  const handleSelect = (book, index) => {
    setForm(book);
    setIndexSelected(index);
  };

  const handleDelete = (index) => {
    const newBooks = JSON.parse(JSON.stringify(books));
    newBooks.splice(index, 1);
    setBooks(newBooks);
  };

  const handleSubmit = (values, { resetForm }) => {
    const newBooks = JSON.parse(JSON.stringify(books));
    if (indexSelected > -1) {
      // Chế độ CẬP NHẬT
      newBooks.splice(indexSelected, 1, values);
    } else {
      // Chế độ THÊM MỚI
      newBooks.push(values);
    }
    setBooks(newBooks);
    // Reset form về trạng thái ban đầu
    setForm({ title: "", quantity: "" });
    setIndexSelected(-1);
    resetForm();
  };

  return (
    <>
      <div className="container">
        <h1>Thư viện Sách</h1>

        <Formik
          initialValues={form}
          validate={handleValidate}
          onSubmit={handleSubmit}
          enableReinitialize={true} // Cập nhật form khi `initialValues` (biến `form`) thay đổi
        >
          <div className="form-container">
            <Form>
              <div>
                <label htmlFor="title">Tiêu đề</label>
                <Field name="title" type="text" id="title" />
                <ErrorMessage name="title" component="p" className="error" />
              </div>
              <div>
                <label htmlFor="quantity">Số lượng</label>
                <Field name="quantity" type="text" id="quantity" />
                <ErrorMessage name="quantity" component="p" className="error" />
              </div>
              <button type="submit">Submit</button>
            </Form>
          </div>
        </Formik>

        <table>
          <thead>
            <tr>
              <th>Tiêu đề</th>
              <th>Số lượng</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.quantity}</td>
                <td>
                  <div className="action-buttons">
                    <button
                      onClick={() => handleSelect(book, index)}
                      className="action-btn edit-btn"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="action-btn delete-btn"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
