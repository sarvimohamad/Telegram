import React, {useEffect, useState} from 'react';
import {FaPlusCircle} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody, Row, Col
} from "reactstrap"
import {text} from "@fortawesome/fontawesome-svg-core";
import axios from "axios";
import {configs} from "../../../../configs/configs";

function LastSeenExceptions() {
    const token =  JSON.parse(localStorage.getItem('token'));

    useEffect(() =>{
        const token =  JSON.parse(localStorage.getItem('token'));
        getUser()
    },[])



    // Modal open state
    const [modal, setModal] = React.useState(false);
    const [users, setUsers] = useState([]);
    const [check, setCheck] = useState([]);




    // Toggle for Modal
    const toggle = () =>{
        setModal(!modal);
    };

    const onChange = (e) => {
    }

    const getUser = async () => {

            await axios({
                url: configs.BASE_URL + "/contacts",
                method: "get",
                headers: {
                    Authorization: token,
                },
            })
                .then((response) => {
                    setUsers(response.data.data)


                })
                .catch((error) => {
                    // console.log(error)

                });
    };



    const checkHandle = async (e) => {
        let check = e.target.value;
        setCheck([...check,check])
        const data = JSON.parse("[" + check + "]");
        console.log(data)
        await axios({
            url:configs.BASE_URL + "/security/last-seen/exceptions",
            method: "POST",
            data:{
                users: data
            },
            headers: {
                Authorization: token,
            },
        })
            .then((response) =>{
                // console.log(response.data)
            })
            .catch()
    }



    return (

        <>
            <Col onClick={toggle}><span className="ps-2">Add Exceptions</span><FaPlusCircle/></Col>
            <Modal isOpen={modal} toggle={toggle}  className="special_modal" >
                <ModalHeader >
                    add Exception
                </ModalHeader>
                <ModalBody>

                    {
                        users.map((user) =>
                            <Row key={user.user.id}>
                                <Col md={3}>
                                    <img src="images/21104.png" style={{width:"60px",backgroundColor:"gray",borderRadius:"35px"}} className="mt-2 p-1"/>
                                </Col>
                                <Col md={7}>
                                    <div className="">{user.user.name}</div>
                                    <div >{user.user.mobile}</div>
                                    <div style={{color:"gray",fontSize:"11px"}} className="mt-2">Last Seen 2min Ago</div>
                                </Col>
                                <Col>
                                    {/*<input  key={user.user_id} onClick={checkHandle} className="mt-3" type="radio"/>*/}
                                    <button value={user.contact_id}  onClick={checkHandle}>tik</button>
                                </Col>
                            </Row>
                    )}

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={()=>{
                        toggle()
                    }}>Okay</Button>
                </ModalFooter>
            </Modal>
        </>

    );
}

export default LastSeenExceptions;
