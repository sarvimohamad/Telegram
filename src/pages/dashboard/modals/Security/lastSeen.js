import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody, Row, Col
} from "reactstrap"
import {text} from "@fortawesome/fontawesome-svg-core";
import axios from "axios";
import {configs} from "../../../../configs/configs";
import {NavLink} from "react-router-dom";
import LastSeenExceptions from "./lastSeenExceptions";

function LastSeen({data}) {
    const token =  JSON.parse(localStorage.getItem('token'));

    useEffect(() =>{
        const token =  JSON.parse(localStorage.getItem('token'));
    },[])



    // Modal open state
    const [modal, setModal] = React.useState(false);
    const [radio, setRadio] = useState(data.last_seen);



    // Toggle for Modal
    const toggle =  async () =>{
        await axios({
            url: configs.BASE_URL + "/security/last-seen",
            method: "put",
            data: {
                value:radio,
            },
            headers: {
                Authorization: token,
            },
        })
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            });

        setModal(!modal);
    };

    const onChange = (e) => {
        setRadio(e.target.value)

    }

    return (

        <>
            <Col onClick={toggle}>LastSeen</Col>
            <Modal isOpen={modal} toggle={toggle}  className="special_modal" >
                <ModalHeader >
                    Who Can See My Last Seen Time ?
                </ModalHeader>
                <ModalBody>
                  <Row className="pt-3">
                     <Col >NoBody</Col>
                     <Col>
                         <input  name='sec' value='nobody' checked={radio === 'nobody'}  type="radio" onChange={onChange}  />
                     </Col>
                  </Row>

                  <Row className="pt-3">
                    <Col>everyone</Col>
                    <Col><input name='sec' value='everyone' checked={radio === 'everyone'} type="radio" onChange={onChange}   />
                    </Col>
                  </Row>

                    <Row className="pt-3">
                       <Col>contact</Col>
                       <Col><input name='sec' value='contacts' checked={radio === 'contacts'} type="radio" onChange={onChange}   />
                       </Col>
                  </Row>
                </ModalBody>

                <ModalFooter style={{direction:"rtl"}}>
                    <NavLink style={{textDecoration:"none"}}>
                        <LastSeenExceptions />
                    </NavLink>

                </ModalFooter>
            </Modal>
        </>

    );
}

export default LastSeen;
