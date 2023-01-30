import { useEffect, useState } from "react";
import useIncrement from '../hooks/useIncrement';

export default function useAutoIncrement(initialValue=0, step=1, speed=1000){
    const [count, increment] = useIncrement(initialValue, step);
    const [state, setState] = useState(true)

    useEffect(() => {
        const timer = window.setInterval(
            function(){
                if (state)
                    increment();
            }, speed
        )

        return function clear(){
            clearInterval(timer)
        }
    })

    function pause(){
        setState(!state);
    }
   
    return [count, pause];
}