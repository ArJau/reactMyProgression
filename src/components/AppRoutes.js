import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import TechnoAdd from "../pages/TechnoAdd";
import TechnoList from "../pages/TechnoList";
import TestHook from "../pages/TestHook";
import TodoList from "../pages/TodoList";
import Context from "../pages/Context";

export default function AppRoutes(){
    return (<>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/add" element={<TechnoAdd/>} />
      <Route path="/list" element={<TechnoList/>} />
      <Route path="/todo" element={<TodoList/>} />
      <Route path="/testHook" element={<TestHook/>} />
      <Route path="/context" element={<Context/>} />
    </Routes>
    </>)
}