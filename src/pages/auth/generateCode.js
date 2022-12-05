import { Container, Row, Col, Input, Button } from "reactstrap";
import { useOnChangesHandler } from "../../hooks/useOnChangesHandler";
import useToggle from "../../helpers/useToggle";
// import { query } from "../../helpers/query";
import { useNavigation } from "../../hooks/useNavigate";
import { useDispatch } from "react-redux";
import { saveMobile } from "../../redux/slices/mobile.js";
import axios from "axios";
import { configs } from "../../configs/configs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GenerateCode = ({ onSave, isButtonDisable }) => {
  const [mobile, onChangeMobile, setMobile] = useOnChangesHandler("");
  const [disable, setDisable] = useToggle(false);
  const navigation = useNavigation("");
  const dispatcher = useDispatch();
  const notify = (text) => toast(text);

  const save = async () => {
    setDisable(true);
    if (!mobile.trim()) {
      notify("لطفا شماره تلفن خود را وارد کنید");
      setDisable(false);
      return;
    } else {
      await axios({
        url: configs.BASE_URL + "/auth/code",
        method: "POST",
        data: {
          mobile,
        },
      })
        .then((response) => {
          dispatcher(saveMobile(mobile));
          setDisable(false);
          navigation("/login");
          setMobile("");
        })
        .catch((error) => {
          notify("شماره تلفن وارد شده معتبر نمیباشد.");
          setDisable(false);
        });
    }
  };

  return (
    <Container
      className={
        "generate-code d-flex justify-content-center align-items-center"
      }
    >
      <Row>
        <Col md={12}>
          <div className={"d-flex justify-content-center flex-column"}>
            <div className={"generate-code-title"}>
              <h2>ساخت کد ورود</h2>
            </div>
            <div className={"generate-code-text mt-1"}>
              <p>لطفا شماره تلفن همراه خود را وارد کنید</p>
            </div>
            <div className={"generate-code-phone-input mt-4"}>
              <Input
                placeholder={"شماره تلفن *"}
                type={"text"}
                onChange={onChangeMobile}
                value={mobile}
              />
              <ToastContainer />
            </div>
            <div className={"generate-code-button mt-3 text-center"}>
              <Button
                className={"btn btn-lg"}
                onClick={save}
                disabled={disable}
              >
                ادامه
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GenerateCode;
