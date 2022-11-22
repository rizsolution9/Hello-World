import React, { useState, useEffect } from "react";
import CustomerList from "./CustomerList";
import CustomerAddEdit from "./CustomersAddEdit";
import { Customers } from "../../APIS/CustomerAPIs";
import PageMode from "../../Helpers/AppConstants";

const CustomerController = () => {
  const [pageMode, setpageMode] = useState(PageMode.LIST);
  const [list, setList] = useState([]);

  useEffect(() => {
    Customers()
      .then((obj) => {
        setList(obj.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <div>
      {pageMode === PageMode.LIST ? (
        <CustomerList List={list} setPageMode={setpageMode} />
      ) : pageMode === PageMode.ADD ? (
        <CustomerAddEdit setPageMode={setpageMode} />
      ) : (
        <h1>Edit Form</h1>
      )}
    </div>
  );
};

export default CustomerController;
