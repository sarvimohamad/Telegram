import React from 'react';
import {MDBBtn} from "mdb-react-ui-kit";
import {Col} from "reactstrap";
import Sidebar from "./sidebar";
import { BrowserRouter as Router } from 'react-router-dom';
import {useSelector} from "react-redux";

const SearchChat = () => {
    const darkMode = useSelector((state) => state.dark);
    return (
        <>
            <form className={darkMode ? " search-chat-dark p-3" : "search-chat p-3"}>
                <input type='search' className='form-control' placeholder='متن' aria-label='Search' />

            </form>


        </>
    );
};

export default SearchChat;
