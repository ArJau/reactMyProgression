import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import TechnoAdd from "../pages/TechnoAdd";
import TechnoList from "../pages/TechnoList";

export default function AppRoutes(){
    return (<>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/add" element={<TechnoAdd/>} />
      <Route path="/list" element={<TechnoList/>} />
    </Routes>
    </>)
}