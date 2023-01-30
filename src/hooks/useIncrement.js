import { useState } from "react";

export default function useIncrement(initialValue, step){
    const [count, setCount] = useState(initialValue)
    
    const increment = function(){
        setCount(count + step)
    }
    return [count, increment];
}