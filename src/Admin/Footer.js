import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="main-footer">
        <strong>
          Copyright © 2022 <Link to="/">Riz Solutions</Link>{" "}
          <b>'The Solutions Provider'</b>
          <br></br>
        </strong>
        All rights reserved.
        <div className="float-right d-none d-sm-inline-block">
          <b>Made By Riz Solutions Team</b>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
