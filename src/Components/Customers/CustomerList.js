import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Customers } from "../../APIS/CustomerAPIs";

export default function CustomerList(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    Customers()
      .then((obj) => {
        setData(obj.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.testArray]);

  function deleteUser() {
    let testArray = props.testArray;
    testArray.push("Customer 3");
    props.setTestArray(testArray)
    // alert("Are You Sure?");
  }

  return (
    <div>

      <div className="content-wrapper">
      <div>
        <h1>Props Values</h1>
        <div>{props.HaiderValue}</div>
        <div>{props.testArray}</div>
        <div><button onClick={()=> {
           let testArray = props.testArray;
           testArray.push("Customer 3");
           props.setTestArray(testArray);
        }}>Add new customer</button></div>
      </div>
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6 mt-4">
                <h1>Customers</h1>
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
                  <Link className="btn btn-primary" to="/addcust">
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
                        {data.map((value, index, array) => {
                          return (
                            <tr>
                              <td>{value.Id}</td>
                              <td>{value.Name}</td>
                              <td>{value.Cnic}</td>
                              <td>{value.Ntn}</td>
                              <td>{value.EmailAddress}</td>
                              <td>{value.Contact}</td>
                              <td>{value.Address}</td>
                              <td>{value.Province}</td>
                              <td>{value.City}</td>
                              <td>
                                <Link
                                  className="btn btn-primary m-2"
                                  to="/editcust"
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
  );
}
