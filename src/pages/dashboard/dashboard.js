import DashboardHeader from "./dashboardHeader";
import SearchChat from "./search";
import { Container, Row, Col } from "reactstrap";
import {MDBBtn, MDBCollapse} from "mdb-react-ui-kit";
import React from "react";
import Sidebar from "./sidebar";
import {useSelector} from "react-redux";
import Header from "../../base/loginHeader";
import Footer from "../../base/loginFooter";


const Dashboard = () => {

  const darkMode = useSelector((state) => state.dark);
  return (
    <>
      <DashboardHeader />


        <Row className={darkMode ? "app dark-mode-list" : "app"}>
          <Col  md={9} sm={12}>
            <Header />
            <div className={darkMode ? "chat dark-mode-chat" : "chat"}>
            چت مخاطب
            </div>
            <Footer />
          </Col>
          <Col  md={3} sm={12}>
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
        </Row>


    </>
  );
};

export default Dashboard;
