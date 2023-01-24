import TechnoItem from "../components/TechnoItem"

export default function TechnoList({technos, setTechnos}){
    function onDelete(id){
        console.log(id);
        setTechnos([...technos].filter((techno)=>techno.id !== id));
    }
    return (<div>
        <h1>All technos</h1>
        <div className="technoList">
        {
            technos.map((tech) =>(
                <TechnoItem key={tech.id} tech={tech} onAction={()=>onDelete(tech.id)}/>
            ))
        }
        </div>
    </div>)
}