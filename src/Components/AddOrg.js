import React, { useState } from "react";
// import { create } from "../APIS/OrganizationAPI";
// import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const initialValues = {
  OrgName: "",
  OwnerName: "",
  OwnerEmail: "",
  OwnerContact: "",
  SolutionType: "",
};

const AddOrg = () => {
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit
  } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(
        "~ file: AddOrganization.js ~ line 22 AddCustomer ~ values",
        values
      );
    },
  });
  // let history = useNavigate();
  // const [OrgName, setOrgName] = useState("");
  // const [OwnerName, setOwnerName] = useState("");
  // const [OwnerEmail, setOwnerEmail] = useState("");
  // const [OwnerContact, setOwnerContact] = useState("");
  // const [SolutionType, setSolutionType] = useState("");
  // const [Organization, setOrganization] = useState(initialState);
  // // const [submitted, setSubmitted] = useState(false);

  // const Add = () => {
  //   console.log(OrgName, OwnerName, OwnerEmail, OwnerContact, SolutionType);
  //   create({
  //     OrgName: OrgName,
  //     OwnerName: OwnerName,
  //     OwnerEmail: OwnerEmail,
  //     OwnerContact: OwnerContact,
  //     SolutionType: SolutionType,
  //   })
  //     .then((response) => {
  //       console.log(response.data.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  //   history("/");
  // };

  // const onOrgNameChange = (value) => {
  //   setOrgName(value);
  // };

  // const onOwnerNameChange = (value) => {
  //   setOwnerName(value);
  // };

  // const onOwnerEmailChange = (value) => {
  //   setOwnerEmail(value);
  // };

  // const onOwnerContactChange = (value) => {
  //   setOwnerContact(value);
  // };

  // const onSolutionTypeChange = (value) => {
  //   setSolutionType(value);
  // };
  return (
    <div className="content-wrapper">
      <div className="col-mx-6">
        <div className="container">
          <div className="row">
            <form onSubmit={handleSubmit}>
              <div className="container-fluid">
                <div className="card-body-md-6">
                  <p className="login-box-msg mt-3">
                    <h3>Add a User</h3>
                  </p>
                  <div className="col-sm-12">
                    <label htmlFor="OrgName">Org Name</label>
                    <input
                      className="form-control"
                      name="OrgName"
                      onChange={handleChange}
                      value={values.OrgName}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="col-sm-12">
                    <label htmlFor="OwnerName">Owner Name</label>
                    <input
                      className="form-control"
                      name="OwnerName"
                      onChange={handleChange}
                      value={values.OwnerName}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="col-sm-12">
                    <label htmlFor="OwnerEmail">Owner Email</label>
                    <input
                      name="OwnerEmail"
                      className="form-control"
                      onChange={handleChange}
                      value={values.OwnerEmail}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="col-sm-12">
                    <label htmlFor="OwnerContact">Owner Contact</label>
                    <input
                      name="OwnerContact"
                      className="form-control"
                      onChange={handleChange}
                      value={values.OwnerContact}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="SolutionType">Solution Type</label>
                      <select
                        className="form-control select2"
                        name="SolutionType"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.SolutionType}
                      >
                        <option selected="selected">SO-DC-Invoice</option>
                        <option>SO</option>
                        <option>SO-DC</option>
                      </select>
                    </div>
                  </div>
                  <button
                    className="btn btn-success mb-3 mt-2"
                    type="submit"
                  >
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrg;

