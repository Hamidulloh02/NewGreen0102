import React, { Component, Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = props => {
  const [show, setShow] = useState(false);
  return (
    <Navbar>
      <NavDropdown
        title="Dropdown Menu"
        show={show}
        onMouseEnter={() => setShow(true)}
        // onClick ={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onToggle={() => setShow()}
      >
        <NavDropdown.Item href="#action/3.1">Option 1</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Option 2</NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  );
};
export default Header