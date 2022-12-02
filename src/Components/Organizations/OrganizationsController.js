import React, { useState, useEffect } from "react";
import OrganizationsList from "./Organizations";
import OrganizationEdit from "./OrganizationEdit";
import { Customers, CustomersById } from "../../APIS/CustomerAPIs";
import PageMode from "../../Helpers/AppConstants";
import { Organizations } from "../../APIS/OrganizationAPI";

const CustomerController = () => {
  const [pageMode, setpageMode] = useState(PageMode.LIST);

  const [list, setList] = useState([]);
  const [Obj, setObj] = useState();

  useEffect(() => {
    Organizations()
      .then((obj) => {
        setList(obj.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const LoadUser = (data) => {
  //   setObj(
  //     CustomersById(
  //       data.data.name,
  //       console.log(data.data.name),
  //       data.data.cnic,
  //       console.log(data.data.cnic),
  //       data.data.ntn,
  //       console.log(data.data.ntn),
  //       data.data.emailAddress,
  //       console.log(data.data.emailAddress),
  //       data.data.contact,
  //       console.log(data.data.contact),
  //       data.data.address,
  //       console.log(data.data.address),
  //       data.data.province,
  //       console.log(data.data.province),
  //       data.data.city,
  //       console.log(data.data.city)
  //     )
  //   );
  // };

  // const ModeManager = () => {
  //   if (pageMode === PageMode.ADD) {
  //     setObj(initialValues);
  //   } else if (pageMode === PageMode.EDIT) {
  //     setObj(LoadUser);
  //   }
  // };

  return (
    <div>
      {pageMode === PageMode.LIST ? (
        <OrganizationsList List={list} setPageMode={setpageMode} />
      ) : pageMode === PageMode.ADD ? (
        <OrganizationEdit setPageMode={setpageMode} title="Add New Customer" />
      ) : (
        <OrganizationEdit title="Edit a Customer" setPageMode={setpageMode} />
      )}
    </div>
  );
};

export default CustomerController;
