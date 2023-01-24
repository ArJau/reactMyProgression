export default function TechnoItem({tech, onAction}){
    return (<div className="technoItem">
            <div><h2>{tech.technoName}</h2> </div>
            <div><h4>{tech.technoCategory}</h4></div>
            <div><h5>{tech.technoDescription}</h5></div>
            <div><button name="delete" onClick={onAction}>delete
            </button></div>
        </div>)
}