import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <div className="Home">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Crud Demo</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="add">
            <Button variant="success">Add</Button>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Home;
