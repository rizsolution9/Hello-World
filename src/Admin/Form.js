import React from "react";
import { useDispatch } from "react-redux";
import { addMsgToHeader } from "../Store/CustomerReducer";
import { useFormik } from "formik";

const initialValues = {
  email: "",
  password:"",
  check: "I agree"
}
const Form = () => {

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(
        "~ file: Form.js ~ line 22 AddCustomer ~ values",
        values
      );
    },
  });

  const dispatch = useDispatch();
  return (
    <div>
    <div className="content-wrapper">
      <div className="card col-md-6 offset-md-3 offset-md-3 mt-2">
        {/* general form elements */}
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Login Form</h3>
          </div>
          {/* /.card-header */}
          {/* form start */}
          <form onSubmit={handleSubmit}>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  name="check"
                  className="form-check-input"
                  id="check"
                  value={values.checkbox}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label className="form-check-label" htmlFor="check">
                  Check me out
                </label>
              </div>
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <button onClick={() => dispatch(addMsgToHeader())} className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* /.card */}
        {/* general form elements */}
      </div>
    </div>
    </div>
  );
};

export default Form;
