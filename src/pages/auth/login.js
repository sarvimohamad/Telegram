import { Container, Row, Col, Input, Button } from "reactstrap";
import { useOnChangesHandler } from "../../hooks/useOnChangesHandler";
import useToggle from "../../helpers/useToggle";
// import { query } from "../../helpers/query";
import { useNavigation } from "../../hooks/useNavigate";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { configs } from "../../configs/configs";
import { saveToken } from "../../redux/slices/token";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useState} from "react";

const Login = () => {
  const mobile = useSelector((state) => state.mobile);
  const [code, onChangeCode] = useOnChangesHandler("");
  const [disable, setDisable] = useToggle(false);
  const navigation = useNavigation("");
  const dispatcher = useDispatch();
  const notify = (text) => toast(text);


  const save = async () => {
    setDisable(true);
    if (!code.trim()) {
      notify("کد فعالسازی را وارد کنید");
      setDisable(false);
      return;
    } else {
      await axios({
        url: configs.BASE_URL + "/auth/login",
        method: "POST",
        data: {
          mobile,
          code,
        },
      })
        .then((response) => {
          if (response.status === 202) {
            navigation("/dashboard");
            setDisable(false);
            // console.log(dispatcher(saveToken(response.data)))
            const token = response.data.token_type + " " + response.data.token;
            localStorage.setItem('token' , JSON.stringify(token))
          } else {
            setDisable(false);
            navigation("/register");
            const token = response.data.token_type + " " + response.data.token;
            localStorage.setItem('token' , JSON.stringify(token))
          }
        })
        .catch((error) => {
          notify("کد فعالسازی وارد شده نادرست است");
          setDisable(false);
        });
    }
  };

  return (
    <Container
      className={"login d-flex justify-content-center align-items-center"}
    >
      <Row>
        <Col md={12}>
          <div className={"d-flex justify-content-center flex-column"}>
            <div className={"login-title"}>
              <h2>کد فعالسازی را وارد کنید</h2>
            </div>
            <div className={"login-text mt-1"}>
              <p>
                ما یک پیامک با کد فعال سازی را به شماره تلفن<br></br>
                {mobile} ارسال کردیم.
              </p>
            </div>
            <div className={"login-code-input mt-4"}>
              <Input
                onChange={onChangeCode}
                placeholder={"کد فعالسازی *"}
                type={"text"}
              />
              <ToastContainer />
            </div>
            <div className={"login-button mt-3 text-center"}>
              <Button
                onClick={save}
                disabled={disable}
                className={"btn btn-lg"}
              >
                بعدی
              </Button>
            </div>
            <Link to={"/editMobile"} className="edit-mobile-button mt-3 text-center">
              ویرایش تلفن همراه
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
