import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import TechnoItem from "../components/TechnoItem"
import { handleDeleteTechnoData } from "../feature/technos.slice";

export default function TechnoList(){
    
    const technoData = useSelector((state) => state.technos.technos);
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log("technoData");
        console.log(technoData);
    })

    function onDelete(id){
        dispatch(handleDeleteTechnoData(id))
    }
    return (<div>
        <h1>All technos</h1>
        <div className="technoList">
        {
            technoData.map((tech) =>(
                <TechnoItem key={tech.id} tech={tech} onAction={()=>onDelete(tech.id)}/>
            ))
        }
        </div>
    </div>)
}