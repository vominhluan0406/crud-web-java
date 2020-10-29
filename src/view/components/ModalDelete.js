import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from 'axios';

function ModalDelete(props) {
  const { id } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const handleClickYes = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token')
    try{
      fetch("http://localhost:8080/api/demo/delete/"+id, {
        method: "DELETE",
        headers: {'Authorization':token},
    })
    toggle();
  
    }catch(err){
      console.log("Erorr",err)
    }
    };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Delete
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="delete">
        <ModalHeader toggle={toggle}>Delete Confirmation</ModalHeader>
        <ModalBody>Are you sure to want delete?</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Cancle
          </Button>{" "}
          <Button color="danger" onClick={handleClickYes}>
            Yes
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalDelete;
