import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink, Link } from 'react-router-dom';
import DarkMood from "./darkMood";
import {useSelector} from "react-redux";
import ImgUpload from "./imgUpload";
import NewGroup from "./modals/NewGroup";
import NewChannel from "./modals/NewChannel";
import Contacts from "./modals/Contacts";

const Sidebar = () => {
    const darkMode = useSelector((state) => state.dark);
    return (
        <div style={{ display: 'flex', height: '100vh', minHeight:'100vh', overflow: 'scroll initial', direction: "ltr" }}>
            <CDBSidebar toggled    style={darkMode ? {backgroundColor: "#3b3a3a", color: "#ffffff" } : {backgroundColor: "#efefef", color: "#000000"}}>
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                   <ImgUpload />
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>

                    </a>
                </CDBSidebarHeader>


                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu >
                        <NavLink activeClassName="activeClicked">
                            <CDBSidebarMenuItem className={darkMode ? " light-txt" : " dark-txt"} icon="columns"><NewGroup/></CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink  activeClassName="activeClicked">
                            <CDBSidebarMenuItem className={darkMode ? " light-txt" : " dark-txt"} icon="table"><NewChannel/></CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink  activeClassName="activeClicked">
                            <CDBSidebarMenuItem className={darkMode ? " light-txt" : " dark-txt"} icon="user"><Contacts/></CDBSidebarMenuItem>
                        </NavLink>

                        <p  target="_blank" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="moon">
                                <DarkMood />
                            </CDBSidebarMenuItem>
                        </p>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        style={{
                            padding: '20px 5px',
                        }}
                    >
                        Sidebar Footer
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;