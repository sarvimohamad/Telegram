import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {Col, NavLink, Row} from "reactstrap";
import { FaUpload } from 'react-icons/fa';

const Contacts = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div onClick={handleShow}>
                Contacts
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>Contacts</Modal.Title>
                </Modal.Header>


                <Modal.Body>
                    <Form.Control
                        type="name"
                        placeholder="Search ..."
                        autoFocus
                    />
                   <Row>
                       <Col md={3}>
                           <img src="images/21104.png" style={{width:"60px",backgroundColor:"gray",borderRadius:"35px"}} className="mt-5 p-1"/>
                       </Col>
                       <Col md={7}>
                           <div className="mt-5">amirhossein shabani</div>
                           <div style={{color:"gray",fontSize:"11px"}} className="mt-2">Last Seen 2min Ago</div>
                       </Col>
                   </Row>
                    <Row>
                        <Col md={3}>
                            <img src="images/21104.png" style={{width:"60px",backgroundColor:"gray",borderRadius:"35px"}} className="mt-5 p-1"/>
                        </Col>
                        <Col md={7}>
                            <div className="mt-5">majid manavi</div>
                            <div style={{color:"gray",fontSize:"11px"}} className="mt-2">Last Seen 2min Ago</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <img src="images/21104.png" style={{width:"60px",backgroundColor:"gray",borderRadius:"35px"}} className="mt-5 p-1"/>
                        </Col>
                        <Col md={7}>
                            <div className="mt-5">abas bidram</div>
                            <div style={{color:"gray",fontSize:"11px"}} className="mt-2">Last Seen 2min Ago</div>
                        </Col>
                    </Row>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default Contacts;