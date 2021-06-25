import React from "react";
// import style from "./NavBar.module.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { withRouter } from "react-router-dom";

const NavBar = (props) => {
  const navMenus = [
    { path: "/", title: "Home" },
    { path: "/upcoming-contests", title: "Upcoming Contests" },
    { path: "/live-contests", title: "Live Contests" },
    { path: "/past-contests", title: "Past Contests" },
  ];

  const handleSelect = (eventKey) => {
    console.log(eventKey);
    props.history.push(eventKey);
  };
  return (
    <>
      <Navbar
        bg="dark"
        sticky="top"
        variant="dark"
        expand={false}
        collapseOnSelect={true}
        onSelect={handleSelect}
      >
        <Navbar.Toggle />
        <Navbar.Brand
          style={{
            fontWeight: "bolder",
            fontFamily: "'Source Sans Pro', sans-serif",
            fontSize: 25,
          }}
        >
          Contest Budy
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link eventKey="/about">About</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          {navMenus.map((menuObject) => (
            <Nav.Link
              key={menuObject.title}
              as="span"
              style={{ cursor: "pointer", color: "white" }}
              eventKey={menuObject.path}
            >
              {menuObject.title}
            </Nav.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default withRouter(NavBar);
