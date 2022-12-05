import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {saveDark} from "../../redux/slices/dark";

function DarkMood() {
    const dispatcher = useDispatch()
    const darkMode = useSelector((state) => state.dark);

    const getMode = () => {
        return   JSON.parse(localStorage.getItem('mode'));
    }

    const [dark, setDark] = useState(getMode());

    localStorage.setItem("mode" , JSON.stringify( dispatcher(saveDark(dark))))


    return (
        <div className="app">
                        <label className="switch">
                            <input
                                type="checkbox"
                                onChange={()=> setDark(!dark)}
                                checked={dark}
                            />
                            <span className="slider round"></span>
                        </label>
        </div>
    );
}

export default DarkMood;
