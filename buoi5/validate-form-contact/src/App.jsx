import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./App.css";

export default function EmailForm() {
  const handleValidate = (values) => {
    const errors = {};

    if (!values.to) {
      errors.to = "Required";
    } else if (!/^[A-Z0-9+-]+@[A-Z0-9-]+\.[A-Z]{2,}$/i.test(values.to)) {
      errors.to = "Invalid email address";
    }

    if (!values.title) {
      errors.title = "Required";
    }

    if (!values.message) {
      errors.message = "Required";
    }

    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Dữ liệu form:", values);
    alert("Sent successfully!!!");
    resetForm();
  };

  return (
    <>
      <div className="mail-container">
        <h1>Mail form</h1>
        <Formik
          initialValues={{
            to: "",
            title: "",
            message: "",
            attachment: null,
          }}
          validate={handleValidate}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, values }) => (
            <Form>
              {/* Trường "To" */}
              <div className="form-group">
                <label htmlFor="to">To</label>
                <Field name="to" type="text" id="to" className="form-control" />
                <ErrorMessage
                  name="to"
                  component="div"
                  className="error-message"
                />
              </div>

              {/* Trường "Title" */}
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <Field
                  name="title"
                  type="text"
                  id="title"
                  className="form-control"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="error-message"
                />
              </div>

              {/* Trường "Message" */}
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <Field
                  name="message"
                  as="textarea"
                  id="message"
                  className="form-control-textarea"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="error-message"
                />
              </div>

              {/* Trường đính kèm file */}
              <div className="form-group">
                <label htmlFor="attachment">Attachment</label>
                <label htmlFor="file-upload" className="file-input-label">
                  Choose File
                </label>
                <input
                  id="file-upload"
                  name="attachment"
                  type="file"
                  onChange={(event) => {
                    setFieldValue("attachment", event.currentTarget.files[0]);
                  }}
                />
                {values.attachment && (
                  <span className="file-name">{values.attachment.name}</span>
                )}
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
