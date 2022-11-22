import React from "react";
import { Link } from "react-router-dom";
import PageMode from "../../Helpers/AppConstants";

export default function CustomerList(props) {
  function deleteUser() {
    alert("Are You Sure?");
  }

  return (
    <div className="content-wrapper">
      <div>
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6 mt-4">
                <h1>
                  <b>Customers</b>
                </h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                </ol>
              </div>
            </div>
            {/* <Button variant='contained'>Add</Button> */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <p align="right">
                  <Link className="btn btn-primary" onClick={()=>props.setPageMode(PageMode.ADD)}>
                    Add Customers
                  </Link>
                </p>
                <div className="card">
                  <div className="card-header">
                    {/* <h3 className="card-title" ></h3>  */}
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <table
                      id="example2"
                      className="table table-bordered table-hover"
                    >
                      <thead>
                        <tr>
                          <th>Customer Id</th>
                          <th>Name</th>
                          <th>CNIC</th>
                          <th>NTN</th>
                          <th>Email</th>
                          <th>Contact No.</th>
                          <th>Residential Address</th>
                          <th>Province</th>
                          <th>City</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {props.List.map((value, index, array) => {
                          return (
                            <tr>
                              <td>{value.id}</td>
                              <td>{value.name}</td>
                              <td>{value.cnic}</td>
                              <td>{value.ntn}</td>
                              <td>{value.emailAddress}</td>
                              <td>{value.contact}</td>
                              <td>{value.address}</td>
                              <td>{value.province}</td>
                              <td>{value.city}</td>
                              <td>
                                <Link className="btn btn-primary m-2" to="">
                                  Edit
                                </Link>
                                <button
                                  className="btn btn-danger m-2"
                                  onClick={deleteUser}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tfoot></tfoot>
                    </table>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    </div>
  );
}
