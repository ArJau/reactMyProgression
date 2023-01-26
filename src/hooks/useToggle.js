import { useState } from "react";

export default function useToggle(defaulVisibility = true){
    const [value, setValue] = useState(defaulVisibility)

    function toggle(){
        setValue(!value);
        return value
    }
    return [value, toggle]

}