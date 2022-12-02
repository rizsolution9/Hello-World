import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Organizations } from "../../APIS/OrganizationAPI";
// import OrganizationManager from "../../Helpers/OrganizationConstant";
import PageMode from "../../Helpers/AppConstants";

export default function OrganizationsList(props) {
  const [data, setData] = useState([]); // 1
  //2

  function deleteUser() {
    alert("Are You Sure?");
  }

  return (
    <div>
      <div className="content-wrapper">
        <div>
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6 mt-4">
                  <h1>
                    <b>Organizations</b>
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
                            <th>ID No.</th>
                            <th>Org Name</th>
                            <th>Owner Name</th>
                            <th>Owner Email</th>
                            <th>Owner Contact</th>
                            <th>Solution Type</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {props.List.map((value, index, array) => {
                            return (
                              <tr>
                                <td>{value.id}</td>
                                <td>{value.orgName}</td>
                                <td>{value.ownerName}</td>
                                <td>{value.ownerEmail}</td>
                                <td>{value.ownerContact}</td>
                                <td>{value.solutionType}</td>
                                <td>
                                  <Link
                                    className="btn btn-primary m-2"
                                    onClick={() =>
                                      props.setPageMode(PageMode.EDIT)
                                    }
                                  >
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
    </div>
  );
}
