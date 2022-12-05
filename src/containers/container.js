import Footer from "../base/loginFooter";
import Header from "../base/loginHeader";
import {useSelector} from "react-redux";

const Container = ({ children }) => {
    const darkMode = useSelector((state) => state.dark);
  return (
    <>
      <div className="body">

        <div style={{ minHeight: "82VH" }}>{children}</div>

      </div>
    </>
  );
};

export default Container;
