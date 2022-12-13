import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap"
import LastSeen from "./lastSeen";
import { NavLink } from 'react-router-dom';
import axios from "axios";
import {configs} from "../../../../configs/configs";
import LastSeenExceptions from "./lastSeenExceptions";

function Security() {
    const [data , setData] = useState('');

    const token =  JSON.parse(localStorage.getItem('token'));

    useEffect(() =>{
      const token =  JSON.parse(localStorage.getItem('token'));
        getItems()
    },[])

    const getItems = async () => {
        await axios({
            url: configs.BASE_URL + "/security",
            method: "get",
            headers: {
                Authorization: token,
                "Content-Type": "multipart/form-data",
            },
        })
            .then((response) => {

                setData(response.data)



            })
            .catch((error) => {

            })
    }

    // Modal open state
    const [modal, setModal] = React.useState(false);

    // Toggle for Modal
    const toggle = () => setModal(!modal);

    return (

<>
    <div onClick={toggle}>Security</div>
    <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader >
            <NavLink>
                <LastSeen data={data}/>
            </NavLink>
        </ModalHeader>
        <ModalBody>

        </ModalBody>
        <ModalFooter>

        </ModalFooter>
    </Modal>
</>

    );
}

export default Security;
