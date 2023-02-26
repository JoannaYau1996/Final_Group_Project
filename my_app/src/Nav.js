import "./Nav.css";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function NavScrollExample() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  });

  function changeNav() {
    if (window.scrollY >= 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  }

  return (
    <Navbar
      bg="black"
      expand="lg"
      style={{
        borderBottom: scrolling ? "#04b616 solid 2px" : "#000 solid 2px",
        transition: "all 0.5s ease-in-out",
      }}
      sticky="top"
      className="p-2"
    >
      <Container fluid className="px-3 px-md-5">
        <Link to="/" className="text-decoration-none">
          <Navbar.Brand id="logo" className="fs-4 ">
            {"<FEWD/>"}
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          {" "}
          <MenuIcon style={{ color: "#04b616" }} />{" "}
        </Navbar.Toggle>
        <Navbar.Collapse className="text-center">
          <Nav className="m-auto my-2 my-lg-0 text-center">
            <Link
              to="/"
              className="text-light mx-5 my-2 my-md-0 text-decoration-none"
            >
              Home
            </Link>
            <Link
              to="/post"
              className="text-light mx-5 my-2 my-md-0 text-decoration-none"
            >
              Posts
            </Link>
            <Link
              to="./games"
              className="text-light mx-5 my-2 my-md-0 text-decoration-none"
            >
              Games
            </Link>
            <Link
              to="./about"
              className="text-light mx-5 my-2 my-md-0 text-decoration-none"
            >
              About
            </Link>
          </Nav>
          <Link
            to="./login"
            className="text-light mx-5 my-2 my-md-0 text-decoration-none"
          >
            <Button id="login" className="my-3 my-lg-0 fw-bolder">
              LogIn
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
