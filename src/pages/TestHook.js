import useAutoIncrement from "../hooks/useAutoIncrement";
import useIncrement from "../hooks/useIncrement";
import useToggle from "../hooks/useToggle";

export default function TestHook(){
    function Compteur(){
        const [valIncrement, setValIncrement] = useIncrement(2,4);
        return <button onClick={setValIncrement}>Incrementer {valIncrement}</button>
      }
      function CompteurAuto(){
        const [valIncrement, pause] = useAutoIncrement(0,1,100);
        return <button onClick={pause}>Incrementer {valIncrement}</button>
      }
      function Checkbox(){
        const [compteurVisible, toggle] = useToggle();
        return (<div>
          <input type="checkbox" onChange={toggle} checked= {compteurVisible}></input>
          {compteurVisible && <Compteur/> }
          <br/><CompteurAuto/>
          </div>)
      }

      return (<Checkbox></Checkbox>)
}