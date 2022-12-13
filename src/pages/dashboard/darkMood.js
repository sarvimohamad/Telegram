import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {saveDark} from "../../redux/slices/dark";

function DarkMood() {
    const dispatcher = useDispatch()

    const getMode = () => {
        return   JSON.parse(localStorage.getItem('mode'));
    }

    const [dark, setDark] = useState(getMode());

   useEffect(() => {
       localStorage.setItem("mode" , JSON.stringify( dispatcher(saveDark(dark))))
   })


    return (
        <>
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
        </>
    );
}

export default DarkMood;
