import React, { useState, useEffect } from "react";
import CustomerList from "./CustomerList";
import CustomerAddEdit from "./CustomersAddEdit";
import { Customers, CustomersById } from "../../APIS/CustomerAPIs";
import PageMode from "../../Helpers/AppConstants";

const CustomerController = () => {
  const [pageMode, setpageMode] = useState(PageMode.LIST);
  const [list, setList] = useState([]);
  const [Obj, setObj] = useState();

  useEffect(() => {
    Customers()
      .then((obj) => {
        setList(obj.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    ModeManager();
  }, []);

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

  const LoadUser = (data) => {
    setObj(
      CustomersById(
        data.data.name,
        console.log(data.data.name),
        data.data.cnic,
        console.log(data.data.cnic),
        data.data.ntn,
        console.log(data.data.ntn),
        data.data.emailAddress,
        console.log(data.data.emailAddress),
        data.data.contact,
        console.log(data.data.contact),
        data.data.address,
        console.log(data.data.address),
        data.data.province,
        console.log(data.data.province),
        data.data.city,
        console.log(data.data.city)
      )
    );
  };

  const ModeManager = () => {
    if (pageMode === PageMode.ADD) {
      setObj(initialValues);
    } else if (pageMode === PageMode.EDIT) {
      setObj(LoadUser);
    }
  };

  return (
    <div>
      {pageMode === PageMode.LIST ? (
        <CustomerList List={list} setPageMode={setpageMode} />
      ) : pageMode === PageMode.ADD ? (
        <CustomerAddEdit
          setPageMode={setpageMode}
          title="Add New Customer"
          setobj={ModeManager}
        />
      ) : (
        <CustomerAddEdit
          title="Edit a Customer"
          setPageMode={setpageMode}
          setobj={ModeManager}
        />
      )}
    </div>
  );
};

export default CustomerController;
