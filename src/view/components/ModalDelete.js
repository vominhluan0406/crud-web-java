import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function ModalDelete(props) {
  const { id } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const handleClickYes = () => {
    fetch("https://webbanhangapi.herokuapp.com/api/product/delete/" + id, {
      method: "DELETE",
      body: "Delete " + id,
      headers: { "Content-Type": "application/json" },
    });
    toggle();
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
