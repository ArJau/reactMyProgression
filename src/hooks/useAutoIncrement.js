import { useEffect, useState } from "react";
import useIncrement from '../hooks/useIncrement';

export default function useAutoIncrement(initialValue=0, step=1, speed=1000){
    const [count, increment] = useIncrement(initialValue, step);

    useEffect(() => {
        const timer = window.setInterval(
            function(){
                increment();
            }, speed
        )
        return function(){
            clearInterval(timer)
        }
    })
    
    function pause(){
        initialValue = 0;
    }
   
    return [count, pause];
}