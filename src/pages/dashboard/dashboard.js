import DashboardHeader from "./dashboardHeader";
import SearchChat from "./search";
import { Row, Col } from "reactstrap";
import React from "react";
import Sidebar from "./sidebar";
import {useSelector } from "react-redux";
import Header from "../../base/loginHeader";
import Footer from "../../base/loginFooter";


const Dashboard = () => {

  const darkMode = useSelector((state) => state.dark);
  // const users = useSelector((state) => state.user);

  return (
    <>
      <DashboardHeader />


        <Row className={darkMode ? "app dark-mode-list" : "app"}>
          <Header />
          <Col  xs={9} >

            <div className={darkMode ? "chat dark-mode-chat" : "chat"}>
            چت مخاطب
            </div>

          </Col>
          <Col  xs={3} >
            <Row>
              <Col md={10}>
                <SearchChat />
              </Col>
              <Col md={2}>
                <Sidebar />
              </Col>
            </Row>


            {/*<div className="chat-list"> چاپ شدن لیست چت مخاطب</div>*/}
          </Col>
          <Footer />
        </Row>


    </>
  );
};

export default Dashboard;
