import React from "react";
// import { create } from "../../APIS/CustomerAPIs";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "../../Schema/CustomerValidation";

const initialValues = {
  Name: "",
  Cnic: "",
  Ntn: "",
  emailAddress: "",
  Contact: "",
  Address: "",
  Province: "",
  City: "",
  IsCompany: false,
};

const CustomerAddEdit = (props) => {
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(
        "~ file: AddCustomer.js ~ line 22 AddCustomer ~ values",
        values
      );
    },
  });
  let history = useNavigate();

  // const Add = () => {
  //   create({
  //     Name: Name,
  //     Company: Company,
  //     Individual: Individual,
  //     Cnic: CNIC,
  //     NTN: NTN,
  //     EmailAddress: EmailAddress,
  //     Contact: Contact,
  //     Address: ResidentialAddress,
  //     Province: Province,
  //     City: City,
  //   })
  //     .then((response) => {
  //       console.log(response.data.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  //   history("/");
  // };

  return (
    <div className="content-wrapper">
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">
            <b>Add New Customer</b>
          </h3>
        </div>
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <div className="card-body">
            <div className="form-group row">
              <label htmlFor="Name" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Name}
                  style={{
                    backgroundImage: 'url("data:image/png',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: 20,
                    backgroundPosition: "97% center",
                    cursor: "auto",
                  }}
                  data-temp-mail-org={2}
                />
                {<p className="form-error">{errors.Name}</p>}
              </div>
            </div>
            <div className="form-group row">
              <div className="offset-sm-2 col-sm-10">
                <div className="icheck-primary d-inline mx-2 ">
                  <input
                    type="radio"
                    id="radioPrimary1"
                    name="IsCompany"
                    value={values.IsCompany === true}
                    onChange={handleChange}
                  />
                  <label for="radioPrimary1">Individual</label>
                </div>
                <div className="icheck-primary d-inline">
                  <input
                    type="radio"
                    id="radioPrimary2"
                    name="IsCompany"
                    value={values.IsCompany === false}
                    onChange={handleChange}
                  />
                  <label for="radioPrimary2">Company</label>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="Cnic" className="col-sm-2 col-form-label">
                CNIC No.
              </label>
              <div className="col-sm-10">
                <input
                  type="Cnic"
                  className="form-control"
                  id="Cnic"
                  placeholder="CNIC Number"
                  value={values.Cnic}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{
                    backgroundImage: 'url("data:image/png',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: 20,
                    backgroundPosition: "97% center",
                    cursor: "auto",
                  }}
                  data-temp-mail-org={2}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="Ntn" className="col-sm-2 col-form-label">
                NTN No.
              </label>
              <div className="col-sm-10">
                <input
                  type="Ntn"
                  className="form-control"
                  id="Ntn"
                  value={values.Ntn}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="NTN Number"
                  style={{
                    backgroundImage: 'url("data:image/png',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: 20,
                    backgroundPosition: "97% center",
                    cursor: "auto",
                  }}
                  data-temp-mail-org={2}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="emailAddress" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="emailAddress"
                  value={values.emailAddress}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Email Address"
                  style={{
                    backgroundImage: 'url("data:image/png',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: 20,
                    backgroundPosition: "97% center",
                    cursor: "auto",
                  }}
                  data-temp-mail-org={2}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="Contact" className="col-sm-2 col-form-label">
                Contact No.
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="Contact"
                  value={values.Contact}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Contact Number"
                  style={{
                    backgroundImage: 'url("data:image/png',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: 20,
                    backgroundPosition: "97% center",
                    cursor: "auto",
                  }}
                  data-temp-mail-org={2}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="Address" className="col-sm-2 col-form-label">
                Address
              </label>
              <div className="col-sm-10">
                <input
                  type="Address"
                  className="form-control"
                  id="Address"
                  value={values.Address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Residential Address"
                  style={{
                    backgroundImage: 'url("data:image/png',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: 20,
                    backgroundPosition: "97% center",
                    cursor: "auto",
                  }}
                  data-temp-mail-org={2}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="Province" className="col-sm-2 col-form-label">
                Province
              </label>
              <div className="col-sm-10">
                <select
                  className="form-control"
                  name="Province"
                  id="Province"
                  onChange={handleChange}
                  value={values.Province}
                  onBlur={handleBlur}
                  style={{
                    backgroundImage: 'url("data:image/png',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: 20,
                    backgroundPosition: "97% center",
                    cursor: "auto",
                  }}
                >
                  {/* {<p className="form-error">{errors.AddressCheckbox}</p>} */}
                  <option selected="selected">Sindh</option>
                  <option>Punjab</option>
                  <option>Balochistan</option>
                  <option>KPK</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="City" className="col-sm-2 col-form-label">
                City
              </label>
              <div className="col-sm-10">
                <select
                  className="form-control"
                  name="City"
                  id="City"
                  onChange={handleChange}
                  value={values.City}
                  onBlur={handleBlur}
                  style={{
                    backgroundImage: 'url("data:image/png',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: 20,
                    backgroundPosition: "97% center",
                    cursor: "auto",
                  }}
                >
                  {/* {<p className="form-error">{errors.AddressCheckbox}</p>} */}
                  <option selected="selected">Karachi</option>
                  <option>Lahore</option>
                  <option>Islamabad</option>
                  <option>Quetta</option>
                </select>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary float-right mx-2">
              Add
            </button>
            <button type="submit" onClick={props.Back} className="btn btn-default float-right">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerAddEdit;
