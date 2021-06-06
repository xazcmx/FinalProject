import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import { FaEdit } from "react-icons/fa"
import UpdateForm from "./UpdateForm";

//this component is the modal that pops up when you want to update the data

const UpdateModal = (props) => {

  // console.log({...props})
  // console.log(props)

    const reload=()=>window.location.reload();
    const [show, setShow] = useState(false);

    const handleClose = async () => {
       setShow(false);      
       setTimeout(function(){reload(); }, 1500);

    }

    const handleShow = () => setShow(true);
        return (
            <>
              <Button variant="outline-success" className="m-1" size="sm" onClick={handleShow}>
              <FaEdit />
              </Button>
            <Modal
              show={show}
              {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
                <Modal.Header>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Update this selection
                  </Modal.Title>
                  <CloseButton onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                  <UpdateForm props={props} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>                  
                </Modal.Footer>
            </Modal>
          </>
        );
    }

export default UpdateModal;