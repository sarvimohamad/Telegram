import { useState } from "react";

export const useOnChangesHandler = (initial) => {

    const [value , setValue] = useState(initial);

    const onChangesHandler = (e) => setValue(e.target.value);

    return [value, onChangesHandler , setValue];
}