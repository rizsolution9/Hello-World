import React, { useState, useEffect } from "react";
import { update, CustomersById } from "../../APIS/CustomerAPIs";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const initialValues = {
  Name: "",
  Cnic: "",
  Ntn: "",
  EmailAddress: "",
  Contact: "",
  Address: "",
  Province: "",
  City: "",
  IsCompany: false,
};

const EditCustomer = () => {
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(
        "~ file: AddCustomer.js ~ line 22 AddCustomer ~ values",
        values
      );
    },
  });
  let history = useNavigate();
  // const [Name, setName] = useState("");
  // const [CNIC, setCNIC] = useState("");
  // const [NTN, setNTN] = useState("");
  // const [EmailAddress, setEmailAddress] = useState("");
  // const [Contact, setContact] = useState("");
  // const [ResidentialAddress, setResidentialAddress] = useState("");
  // const [Province, setProvince] = useState("");
  // const [City, setCity] = useState("");
  // const [customers, setcustomers] = useState(initialState);
  // const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    loadUser("abc001");
  },[]);

  // const updateUser = (e) => {
  //   e.preventDefault();
  //   console.log();
  //   update();
  //   history("/");
  // };

  const loadUser = (id) => {
    CustomersById(id)
      .then((obj) => {
        values.Name = obj.data.data.Name;
        values.Cnic = obj.data.data.Cnic;
        values.Ntn = obj.data.data.Ntn;
        values.EmailAddress = obj.data.data.EmailAddress;
        values.Contact = obj.data.data.Contact;
        values.Address = obj.data.data.Address;
        values.Province = obj.data.data.Province;
        values.City = obj.data.data.City;
        console.log(obj.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const onSubmit = (e) => {
  //   e.setOrganization();
  //   // history.push("/")
  // };

  // const onNameChange = (value) => {
  //   setName(value);
  // };

  // const onCNICChange = (value) => {
  //   setCNIC(value);
  // };

  // const onNTNChange = (value) => {
  //   setNTN(value);
  // };

  // const onEmailAddressChange = (value) => {
  //   setEmailAddress(value);
  // };

  // const onContactChange = (value) => {
  //   setContact(value);
  // };

  // const onResidentialAddressChange = (value) => {
  //   setResidentialAddress(value);
  // };

  // const onProvinceChange = (value) => {
  //   setProvince(value);
  // };

  // const onCityChange = (value) => {
  //   setCity(value);
  // };
  return (
    <div>
      <div className="content-wrapper">
        <div className="col-mx-6">
          <div className="container">
            <div className="row">
              <form onSubmit={handleSubmit}>
                <div className="container-fluid">
                  <div className="card-body-md-6">
                    <p className="login-box-msg mt-3">
                      <h3>Edit Customer</h3>
                    </p>
                    <div className="col-sm-12">
                      <label htmlFor="Name">Name</label>
                      <input
                        className="form-control"
                        name="Name"
                        id="Name"
                        value={values.Name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="Cnic">CNIC</label>
                      <input
                        className="form-control"
                        name="Cnic"
                        id="Cnic"
                        value={values.Cnic}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="Ntn">NTN</label>
                      <input
                        className="form-control"
                        name="Ntn"
                        id="Ntn"
                        value={values.Ntn}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="EmailAddress">Email Address</label>
                      <input
                        name="EmailAddres"
                        id="EmailAddress"
                        value={values.EmailAddress}
                        className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="Contact">Contact / Phone</label>
                      <input
                        name="Contact"
                        id="Contact"
                        value={values.Contact}
                        className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="Address">ResidentialAddress</label>
                      <input
                        className="form-control"
                        name="Address"
                        id="Address"
                        value={values.Address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label htmlFor="Province">Province</label>
                        <select
                          id="Province"
                          name="Province"
                          className="form-control select2"
                          value={values.Province}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option selected="selected">Sindh</option>
                          <option>Punjab</option>
                          <option>Balochistan</option>
                        </select>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label htmlFor="Province">City</label>
                          <select
                            id="City"
                            name="City"
                            className="form-control select2"
                            value={values.City}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <option selected="selected">Karachi</option>
                            <option>Lahore</option>
                            <option>Islamabad</option>
                            <option>Quetta</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-warning mb-3 mt-2" type="submit">
                      Edit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCustomer;
