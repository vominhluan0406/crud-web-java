import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Input, Form, FormGroup, Label, Button } from "reactstrap";

function Add(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://webbanhangapi.herokuapp.com/api/product/add", {
      method: "POST",
      body: JSON.stringify({ name, price, description }),
      headers: { "Content-Type": "application/json" },
    });
    setPrice("");
    setName("");
    setDescription("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Name</Label>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Price</Label>
        <Input
          type="text"
          name="price"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Price</Label>
        <Input
          type="textarea"
          name="description"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </FormGroup>
      <Button outline color="success">
        Add
      </Button>
    </Form>
  );
}

export default Add;
