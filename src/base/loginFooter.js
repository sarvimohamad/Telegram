import { Container, Row, Col } from "reactstrap";
import {useSelector} from "react-redux";

const Footer = () => {
  const darkMode = useSelector((state) => state.dark);
  return (
    <div className={darkMode ? " dark-mode" : "login-footer"}>
      <Row>
        <Col md={12}>
        <div className={"w-100 d-flex justify-content-center align-items-center"}>
        <p className="login-footer-text m-0 py-4">
          به پیام رسان رسمی فام خوش آمدید
        </p>
        </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
