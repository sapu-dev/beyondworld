import React from "react";
import HeaderSection from "../../components/header";
const Layout = props => (
  <>
    <HeaderSection />
    {props.children}
  </>
);

export default Layout;
