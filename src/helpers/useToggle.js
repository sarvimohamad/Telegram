import { useState } from "react";

const useToggle = (initial) => {
    const [value , setValue] = useState(initial);

    const toggle = () => setValue(prevState => !prevState);

    return [value , toggle , setValue];
}

export default useToggle;