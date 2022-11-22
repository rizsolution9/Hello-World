import React, { useState, useEffect } from "react";
import CustomerList from "./CustomerList";
import CustomerAddEdit from "./CustomersAddEdit";
import { Customers } from "../../APIS/CustomerAPIs";

const CustomerController = () => {
  const [Ui, setUi] = useState(1);
  const [Data, setData] = useState([]);

  useEffect(() => {
    Customers()
      .then((obj) => {
        setData(obj.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Add = () => {
    setUi(2);
  };
  const Back = () => {
    setUi(1);
  };
  return (
    <div>
      {Ui === 1 ? (
        <CustomerList Data={Data} Add={Add} />
      ) : Ui === 2 ? (
        <CustomerAddEdit Back={Back} />
      ) : (
        <h1>Edit Form</h1>
      )}
    </div>
  );
};

export default CustomerController;
