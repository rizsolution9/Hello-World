import React, { useState, useEffect } from "react";
import { update, OrganizationsById } from "../APIS/OrganizationAPI";
import { useNavigate } from "react-router-dom";

const initialState = {
  OrgName: "",
  OwnerName: "",
  OwnerEmail: "",
  OwnerContact: "",
  SolutionType: "",
};

const EditOrg = () => {
  let history = useNavigate();
  const [OrgName, setOrgName] = useState("");
  const [OwnerName, setOwnerName] = useState("");
  const [OwnerEmail, setOwnerEmail] = useState("");
  const [OwnerContact, setOwnerContact] = useState("");
  const [SolutionType, setSolutionType] = useState("");
  const [Organization, setOrganization] = useState(initialState);
  // const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    loadUser("abc005");
  }, []);

  const updateUser = (e) => {
    e.preventDefault();
    console.log(OrgName, OwnerName, OwnerEmail, OwnerContact, SolutionType);
    update();
    history("/");
  };

  const loadUser = (id) => {
    OrganizationsById(id)
      .then((obj) => {
        let OrgName = obj.data.data.OrgName;
        setOrgName(OrgName);
        let OwnerName = obj.data.data.OwnerName;
        setOwnerName(OwnerName);
        let OwnerEmail = obj.data.data.OwnerEmail;
        setOwnerEmail(OwnerEmail);
        let OwnerContact = obj.data.data.OwnerContact;
        setOwnerContact(OwnerContact);
        let SolutionType = obj.data.data.SolutionType;
        setSolutionType(SolutionType);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const onSubmit = (e) => {
  //   e.setOrganization();
  //   // history.push("/")
  // };

  const onOrgNameChange = (value) => {
    setOrgName(value);
  };

  const onOwnerNameChange = (value) => {
    setOwnerName(value);
  };

  const onOwnerEmailChange = (value) => {
    setOwnerEmail(value);
  };

  const onOwnerContactChange = (value) => {
    setOwnerContact(value);
  };

  const onSolutionTypeChange = (value) => {
    setSolutionType(value);
  };
  return (
    <div>
    <div className="content-wrapper">
      <div className="card col-md-6 offset-md-3 offset-md-3">
          <div className="row">
            <form>
              <div className="container-fluid">
                <div className="card-body-md-6">
                  <p className="login-box-msg mt-3">
                    <h3>Edit a User</h3>
                  </p>
                  <div className="col-sm-12">
                    <label>Org Name</label>
                    <input
                      className="form-control"
                      name="name"
                      value={OrgName}
                      onChange={(e) => onOrgNameChange(e.target.value)}
                    />
                  </div>
                  <div className="col-sm-12">
                    <label>Owner Name</label>
                    <input
                      className="form-control"
                      name="name"
                      value={OwnerName}
                      onChange={(e) => onOwnerNameChange(e.target.value)}
                    />
                  </div>
                  <div className="col-sm-12">
                    <label>Owner Email</label>
                    <input
                      name="email"
                      className="form-control"
                      value={OwnerEmail}
                      onChange={(e) => onOwnerEmailChange(e.target.value)}
                    />
                  </div>
                  <div className="col-sm-12">
                    <label>Owner Contact</label>
                    <input
                      name="contact"
                      className="form-control"
                      value={OwnerContact}
                      onChange={(e) => onOwnerContactChange(e.target.value)}
                    />
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Solution Type</label>
                      <select
                        className="form-control select2"
                        value={SolutionType}
                        onChange={(e) => onSolutionTypeChange(e.target.value)}
                      >
                        <option selected="selected">SO-DC-Invoice</option>
                        <option>SO</option>
                        <option>SO-DC</option>
                      </select>
                    </div>
                  </div>
                  <button
                    className="btn btn-warning mb-3 mt-2 "
                    type="submit"
                    onClick={updateUser}
                  >
                    Update
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

export default EditOrg;

