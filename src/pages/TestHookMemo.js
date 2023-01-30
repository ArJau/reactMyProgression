import React, { useCallback, useState } from "react"

const Button = React.memo(
    function ({onClick}){
        console.log('render')
        return <button onClick={onClick}>Mon bouton</button>
    }
)

export default function TestHookMemo(){
    const [count, setCount] = useState(0);

    /*const handleClick = function (){
        alert('Bonjour');
    }*/
    //useMemo evite que le focntion ne soit rerendu a chaque fois que l'on clique sur le bouton incremente
    /*const handleClick = useMemo(function (){
        return function (){
            alert('Bonjour');
        }
    }, [])*/

    //idem à useMemo mais en plus court
    //on met count pour permettre de recharger la fonction a chaque fois que la valeur change
    const handleClick = useCallback(function (){
        alert('Bonjour' + count);
    }, [count])


    return (
        <div>
            <Button onClick={handleClick}></Button>
            <button onClick={()=> setCount(c=> c + 1)}>Incremente {count}</button>

        </div>
    )
  }