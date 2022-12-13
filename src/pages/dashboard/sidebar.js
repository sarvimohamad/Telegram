import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import DarkMood from "./darkMood";
import {useSelector} from "react-redux";
import ImgUpload from "./imgUpload";
import NewGroup from "./modals/NewGroup";
import NewChannel from "./modals/NewChannel";
import Contacts from "./modals/Contacts";
import Security from "./modals/Security/security";

const Sidebar = () => {
    const darkMode = useSelector((state) => state.dark);
    return (
        <div style={{ display: 'flex', height: '80vh', minHeight:'85vh', overflow: 'scroll initial', direction: "ltr" }}>
            <CDBSidebar toggled    style={darkMode ? {backgroundColor: "#3b3a3a", color: "#ffffff" } : {backgroundColor: "#efefef", color: "#000000"}}>
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                   <ImgUpload />
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>

                    </a>
                </CDBSidebarHeader>


                <CDBSidebarContent  className="sidebar-content">
                    <CDBSidebarMenu >
                        <NavLink >
                            <CDBSidebarMenuItem   className={darkMode ? " light-txt" : " dark-txt"} icon="columns"><NewGroup/></CDBSidebarMenuItem>
                        </NavLink >
                        <NavLink  >
                            <CDBSidebarMenuItem className={darkMode ? " light-txt" : " dark-txt"} icon="table"><NewChannel/></CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink  >
                            <CDBSidebarMenuItem className={darkMode ? " light-txt" : " dark-txt"} icon="user"><Contacts/></CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink  >
                            <CDBSidebarMenuItem className={darkMode ? " light-txt" : " dark-txt"} icon="user"><Security/></CDBSidebarMenuItem>
                        </NavLink>

                        <div   >
                            <CDBSidebarMenuItem icon="moon">
                                <DarkMood />
                            </CDBSidebarMenuItem>
                        </div>
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