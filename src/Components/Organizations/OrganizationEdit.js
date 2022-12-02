import React from "react";
// import { create } from "../../APIS/CustomerAPIs";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "../../Schema/CustomerValidation";
import PageMode from "../../Helpers/AppConstants";

const initialValues = {
  orgName: "",
  ownerName: "",
  ownerEmail: "",
  ownerContact: "",
  solutionType: "",
};

const CustomerAddEdit = (props) => {
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
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
      <div className="card card-warning">
        <div className="card-header">
          <h3 className="card-title">
            <b>Edit Organization</b>
          </h3>
        </div>
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <div className="card-body">
            <div class="form-group">
              <label for="orgName">Organization Name</label>
              <input
                type="name"
                class="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.orgName}
                id="orgName"
                placeholder="Organization Name"
              />
            </div>
            <div class="form-group">
              <label for="ownerName">Owner Name</label>
              <input
                type="name"
                class="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.ownerName}
                id="ownerName"
                placeholder="Owner Name"
              />
            </div>
            <div class="form-group">
              <label for="ownerContact">Owner Contact</label>
              <input
                type="text"
                class="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.ownerContact}
                id="ownerContact"
                placeholder="Owner Contact"
              />
            </div>
            <div class="form-group">
              <label for="ownerEmail">Owner Email</label>
              <input
                type="email"
                class="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.ownerEmail}
                id="ownerEmail"
                placeholder="Owner Email"
              />
            </div>
            <div className="form-group row">
              <label htmlFor="Province">Solution Type</label>
              <div className="col-sm-10">
                <select
                  className="form-control"
                  name="Province"
                  id="Province"
                  onChange={handleChange}
                  value={values.solutionType}
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
                  <option selected="selected">SO-DC-Invoice</option>
                  <option>SO-Invoice</option>
                  <option>DC-Invoice</option>
                  <option>SO-DC</option>
                  <option>Invoice</option>
                </select>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-warning float-right mx-2">
              Update
            </button>
            <button
              type="submit"
              onClick={() => props.setPageMode(PageMode.LIST)}
              className="btn btn-default float-right"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerAddEdit;
