import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SidebarButton from "../assets/images/sidebar-button.png";
import ProfilePicture from "../assets/images/profilepic.png";
import BellIcon from "../assets/images/bell.png";
import DownIcon from "../assets/images/down-icon.png";

function Header() {
  const [name, setName] = useState("Hamza Ilyas");

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="border border-bottom"
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt="sidebar_button"
              src={SidebarButton}
              style={{ width: "30px" }}
              className="d-inline-block align-center"
              fluid
            />
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
          {/* <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav> */}
          <Nav className="ms-auto">
            <Nav.Link eventKey={2}>
              <div>
                <span
                  className="px-4 py-3"
                  style={{
                    borderRight: "1px solid lightgray",
                    borderLeft: "1px solid lightgray",
                  }}
                >
                  <img
                    alt="bell_button"
                    src={BellIcon}
                    style={{
                      width: "30px",
                    }}
                    className="d-inline-block align-center"
                    fluid
                  />
                </span>
                <p className="text-dark d-inline-block align-center px-3">
                  {name}
                </p>
                {/* <p className="text-white d-inline-block align-center px-4">
                    {name}
                  </p> */}
                <img
                  alt="profile_picture"
                  src={ProfilePicture}
                  style={{ width: "55px" }}
                  className="d-inline-block align-center rounded-circle"
                  fluid
                />
                <span>
                  <img
                    alt="down_button"
                    src={DownIcon}
                    style={{ width: "15px" }}
                    className="d-inline-block align-center ms-2"
                    fluid
                  />
                </span>
              </div>
            </Nav.Link>
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
