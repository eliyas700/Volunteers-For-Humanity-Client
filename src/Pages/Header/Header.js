import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageTitle from "../Shared/PageTitle";
import "./Header.css";
const Header = () => {
  return (
    <>
      <PageTitle title="Home"></PageTitle>
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="light">
        <Container className="">
          <Navbar.Brand as={Link} to="/">
            <img
              height={"40px"}
              src="https://i.ibb.co/nPQWDtk/pngwing-com.png"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link href="home#experts">Donations</Nav.Link>
              <Nav.Link href="home#experts">Events</Nav.Link>
              <Nav.Link href="home#experts">Blog</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/register">
                <button className="register-btn ">Register</button>
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                <button className="admin-btn">Sign Up</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
