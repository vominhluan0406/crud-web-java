import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Input, FormGroup, Label } from "reactstrap";

function ModalEdit(props) {
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);
  const [description, setDes] = useState(props.description);
  const [img,setImg] = useState(props.img);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const handleClickYes = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/demo/edit/" + props.id, {
      method: "PUT",
      body: JSON.stringify({ name, price, description,img }),
      headers: { "Content-Type": "application/json" },
    });
    toggle();
    console.log(JSON.stringify({ name, price, description }));
  };

  return (
    <div>
      <Button color="success" onClick={toggle}>
        Edit
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="update">
        <ModalHeader toggle={toggle}>Update Product</ModalHeader>
        <ModalBody>
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
            <Label for="exampleEmail">Description</Label>
            <Input
              type="textarea"
              name="description"
              placeholder="Description"
              onChange={(e) => setDes(e.target.value)}
              value={description}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Image Url</Label>
            <Input
              type="textarea"
              name="img"
              placeholder="Image Url"
              onChange={(e) => setDes(e.target.value)}
              value={img}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Cancle
          </Button>{" "}
          <Button color="success" onClick={handleClickYes}>
            Update
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalEdit;
