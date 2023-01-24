import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import './css/app.css';
import Menu from './components/Menu';
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';
import AppRoutes from './components/AppRoutes';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [technos, setTechnos] = useState([]);

  function handleAddTechno(techno){
    /*const _techno = [...technos]
    techno.id = technoId;
    setTechnoId(technoId + 1);
    _techno.push(techno);
    //console.log(_techno);
    setTechnos(_techno);*/

    //techno.id = uuidv4();
    //setTechnos([...technos, techno]);
    setTechnos([...technos, {...techno, id:uuidv4()}]);
  }
  return (
    <>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/add" element={<TechnoAdd handleAddTechno={handleAddTechno}/>} />
      <Route path="/list" element={<TechnoList technos={technos} setTechnos={setTechnos}/>} />
    </Routes>
    </>
  );
}

export default App;
