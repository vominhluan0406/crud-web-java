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
        <Nav.Link href="/login">
          <Button variant="success">Log in</Button>
        </Nav.Link>
        <Nav.Link href="/api/logout" onClick={()=>{localStorage.clear()}}>
          <Button variant="danger">Log out</Button>
        </Nav.Link>
      </Navbar>
    </div>
  );
}

export default Home;
