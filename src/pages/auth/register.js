import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { useOnChangesHandler } from "../../hooks/useOnChangesHandler";
import useToggle from "../../helpers/useToggle";
// import { query } from "../../helpers/query";
import { useSelector } from "react-redux";
import axios from "axios";
import { configs } from "../../configs/configs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigation } from "../../hooks/useNavigate";
import { useEffect, useState } from "react";

const Register = () => {
  const jsonToken = useSelector((state) => state.token);
  const token = jsonToken.token_type + " " + jsonToken.token;
  const [name, onChangeName] = useOnChangesHandler("");
  const [username, onChangeUsername] = useOnChangesHandler("");
  const [bio, onChangeBio] = useOnChangesHandler("");
  const [disable, setDisable] = useToggle(false);
  const notify = (text) => toast(text);
  const navigation = useNavigation("");
  const [imageUrl, setImageUrl] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const onChangeImage = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  useEffect(() => {
    if (selectedImage) {
      uploadImage();
    }
  }, [selectedImage]);

  const uploadImage = async () => {
    const file = { file: selectedImage };
    await axios({
      url: configs.BASE_URL + "/user/profile-picture",
      method: "POST",
      data: file,
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        setImageUrl(response.data.data);
        notify("عکس شما با موفقیت ذخیره شد");
      })
      .catch((error) => {
        if (error.request.status === 422) {
          notify("حجم عکس شما از 1 مگابایت بیشتر میباشد");
        }
        console.log(error);
      });
  };

  const signUp = async () => {
    setDisable(true);
    console.log(token);
    await axios({
      url: configs.BASE_URL + "/user/update",
      method: "PUT",
      data: {
        name,
        username,
        bio,
      },
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        navigation("/dashboard");
        setDisable(false);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          notify("ثبت اطلاعات با موفقیت انجام نشد");
          setDisable(false);
        }
        if (error.response.status === 422) {
          notify("نام کاربری وارد شده معتبر نمیباشد");
          setDisable(false);
        }
        console.log(error.response);
      });
  };

  return (
    <Container
      className={
        "register-info d-flex justify-content-center align-items-center"
      }
    >
      <Row>
        <Col md={12}>
          <div className={"d-flex justify-content-center flex-column"}>
            <div className={"register-info-title  text-center text-md-end"}>
              <h2>اطلاعات کاربری</h2>
            </div>
            <Row>
              <Col md={9}>
                <div
                  className={
                    "d-flex justify-content-center justify-content-md-start align-items-center h-100"
                  }
                >
                  <p className={"register-info-text"}>
                    لطفا اطلاعات خود را وارد کنید :
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <Input
                  onChange={(e) => {
                    onChangeImage(e);
                  }}
                  type={"file"}
                  accept={"image/*"}
                  id={"select-image"}
                  className={"d-none"}
                />

                {imageUrl ? (
                  <div className="w-100 d-flex justify-content-center">
                    <div
                      className={
                        "register-info-profile-photo d-flex justify-content-center align-items-center"
                      }
                    >
                      <Label htmlFor={"select-image"}>
                        <img
                          alt={"cameraIcon"}
                          src={imageUrl.url}
                        />
                      </Label>
                    </div>
                  </div>
                ) : (
                  <div className="w-100 d-flex justify-content-center">
                    <div
                      className={
                        "register-info-profile-photo-null d-flex justify-content-center align-items-center"
                      }
                    >
                      <Label htmlFor={"select-image"}>
                        <img
                          alt={"cameraIcon"}
                          src={"/images/Camera icon.png"}
                        />
                      </Label>
                    </div>
                  </div>
                )}
              </Col>
            </Row>
            <Form className={"register-info-phone-form mt-4"}>
              <FormGroup>
                <Input
                  type="text"
                  onChange={onChangeName}
                  placeholder="نام و نام خانوادگی"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  onChange={onChangeUsername}
                  placeholder="نام کاربری * " 
                />
                <ToastContainer />
              </FormGroup>
              <FormGroup>
                <Input
                  type="textarea"
                  onChange={onChangeBio}
                  placeholder="درباره من"
                />
              </FormGroup>
              <Button
                onClick={signUp}
                className="w-100 register-info-button btn"
                disabled={disable}
              >
                ثبت نام
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
