import { NavLink } from "react-router-dom"

export default function Menu(){
    return (<div className="menu">
        <ul>
            <li><NavLink to="/" className={({isActive}) => isActive?"activeLink":""}>Home</NavLink> </li>
            <li><NavLink to="/add" className={({isActive}) => isActive?"activeLink":""}>Add Techno</NavLink> </li>
            <li><NavLink to="/list" className={({isActive}) => isActive?"activeLink":""}>All technos</NavLink> </li>
        </ul>
    </div>)
}