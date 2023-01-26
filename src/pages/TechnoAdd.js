import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { handleAddTechnoData } from "../feature/technos.slice";

export default function TechnoAdd() {

    const inputName = useRef();//useRef est obsolete
    const inputCategory = useRef();
    const inputDescription = useRef();
    const formRef = useRef();
    const dispatch = useDispatch();
    //version plus pro
    const [techno, setTechno] = useState({
        technoName:"", 
        technoCategory:"",
        technoDescription:"" })
    
    function handleChange(evt){
        const {name, value} = evt.target;
        setTechno({...techno, [name]:value});
    }
    //version simplifiée
    const handleSubmitTechno = (evt) => {
        evt.preventDefault();
    
        /*const techno = {
            technoName : inputName.current.value,
            technoCategory : inputCategory.current.value,
            technoDescription : inputDescription.current.value,
        };*/

        //handleAddTechno(techno);
        dispatch(handleAddTechnoData(techno));
        setTechno({
            technoName:"", 
            technoCategory:"",
            technoDescription:"" });
        //formRef.current.reset();
    }
    return (
        <div className="technoAdd">
            <h1>Add a techno</h1>
            <div>
                <form onSubmit={(e) => handleSubmitTechno(e)} ref={formRef}>
                    <label htmlFor="technoName">Name:</label>
                    <br />
                    <input type="text" name="technoName" id="technoName" 
                    ref={inputName} onChange={(evt)=>handleChange(evt)}></input>
                    <br />
                    <label htmlFor="technoName">Category:</label>
                    <br />
                    <select name="technoCategory" id="technoCategory" 
                    ref={inputCategory} onChange={(evt)=>handleChange(evt)}>
                        <option value="">select a category</option>
                        <option value="front">front</option>
                        <option value="back">back</option>
                        <option value="full stack">full statck</option>
                        <option value="autre">autre</option>
                    </select>
                    <br />
                    <label htmlFor="technoDescription">Description:</label>
                    <textarea name="technoDescription" id="technoDescription"  
                    ref={inputDescription} onChange={(evt)=>handleChange(evt)}></textarea>
                    <br />
                    <input type="submit" value="Add techno" className="btn"></input>
                </form>
            </div>
        </div>)
}