import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Input, Form, FormGroup, Label, Button, Alert } from "reactstrap";
import ImageUploader from 'react-images-upload';
import ProgressCircle from '../components/ProgressCircle'

function Add(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [visible, setVisible] = useState(false);
  const [img,setPic] = useState(null);

  const onDismiss = () => setVisible(false);

  const handleSubmit = async (e) => {
    const token = localStorage.getItem('token')
    e.preventDefault();
    await fetch("http://localhost:8080/api/demo", {
      method: "POST",
      body: JSON.stringify({name,price,description,img}),
      headers: { "Content-Type": "application/json",'Authorization':token },
    });

    setVisible(true);
    setPrice("");
    setName("");
    setDescription("");
    setTimeout(()=>setVisible(false),5000);
  };


  return (
    <div>
      <Alert color="info" isOpen={visible} toggle={onDismiss}> 
        <ProgressCircle></ProgressCircle>
      </Alert>
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
          <Label for="exampleEmail">Image Url</Label>
          <Input
            type="text"
            name="img"
            placeholder="Image Url"
            value={img}
            onChange={(e) => setPic(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Description</Label>
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
    </div>
  );
}

export default Add;
