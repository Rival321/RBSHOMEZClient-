import React from "react";
import NavbarTop from "./NavbarTop";
import NavbarBottom from "./NavbarBottom";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <NavbarTop />
      <div className="content">{children}</div>
      <NavbarBottom />
    </div>
  );
};

export default Layout;