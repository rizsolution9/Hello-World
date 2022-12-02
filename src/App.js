import React from "react";
import "./App.css";
import SideNav from "./Admin/SideNav";
import Header from "./Admin/Header";
import Home from "./Admin/Home";
import Footer from "./Admin/Footer";
import PageNotFound from "./Components/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Admin/Form";
import CustomerController from "./Components/Customers/CustomerController";
import OrganizationController from "./Components/Organizations/OrganizationsController";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SideNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/organizations"
          element={<OrganizationController />}
        />
        <Route exact path="/form" element={<Form />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/customers" element={<CustomerController />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
