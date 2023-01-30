import { NavLink } from "react-router-dom"

export default function Menu(){
    return (<div className="menu">
        <ul>
            <li><NavLink to="/" className={({isActive}) => isActive?"activeLink":""}>Home</NavLink> </li>
            <li><NavLink to="/add" className={({isActive}) => isActive?"activeLink":""}>Add Techno</NavLink> </li>
            <li><NavLink to="/list" className={({isActive}) => isActive?"activeLink":""}>All technos</NavLink> </li>
            <li><NavLink to="/todo" className={({isActive}) => isActive?"activeLink":""}>Todo</NavLink> </li>
            <li><NavLink to="/testHook" className={({isActive}) => isActive?"activeLink":""}>Test</NavLink> </li>
            <li><NavLink to="/context" className={({isActive}) => isActive?"activeLink":""}>Context</NavLink> </li>
            <li><NavLink to="/testHookMemo" className={({isActive}) => isActive?"activeLink":""}>HookMemo</NavLink> </li>
            <li><NavLink to="/reactQuery" className={({isActive}) => isActive?"activeLink":""}>ReactQuery</NavLink> </li>
        
            
        </ul>
    </div>)
}