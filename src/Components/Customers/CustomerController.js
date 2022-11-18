import React, { useState, useEffect } from "react";
import CustomerList from "./CustomerList";

const CustomerController = () => {
  const [testArray, setTestArray] = useState([]);
  useEffect(() => {
    setTestArray(["Customer 1", "Customer 2"]);
  }, []);
  return (
    <div>
      <CustomerList testArray={testArray} setTestArray={setTestArray} HaiderValue={45}></CustomerList>
    </div>
  );
};

export default CustomerController;
