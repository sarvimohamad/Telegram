import { Navbar, NavbarBrand } from "reactstrap";
import {useSelector} from "react-redux";

const Header = () => {
    const darkMode = useSelector((state) => state.dark);
  return (
<>
    <Navbar className={darkMode ? " login-header dark-mode" : "login-header"}>
        <NavbarBrand href={"/"}>
            <div className={"d-flex justify-content-center align-items-center"}>
                <img
                    alt={"logo"}
                    src={"/images/TelegramLog.png"}
                    className={"login-header-logo"}
                />
                <h1 className={"login-header-text me-2"}>فام</h1>
            </div>
        </NavbarBrand>
    </Navbar>
</>
  );
};

export default Header;
