import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {Col, NavLink, Row} from "reactstrap";
import { FaUpload } from 'react-icons/fa';

const NewGroup = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div onClick={handleShow}>
                New Group
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>Name Group</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                            <Row>
                                <Col md={3}>
                                    <img src="images/Camera icon.png" style={{width:"50px",borderRadius:"20px",backgroundColor:"#1fb0e3"}} className="ms-5 p-2"/>
                                </Col>

                                <Col md={8}>
                                      <Form.Control
                                         type="name"
                                         placeholder="Group Name ..."
                                         autoFocus
                                       />
                                </Col>
                            </Row>
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NewGroup;