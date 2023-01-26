import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import './css/app.css';
import Menu from './components/Menu';
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';
import AppRoutes from './components/AppRoutes';
import { useState, useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import { setTechnosData } from './feature/technos.slice';
import { useDispatch, useSelector } from 'react-redux';
import useIncrement from './hooks/useIncrement';
import useToggle from './hooks/useToggle';
import useAutoIncrement from './hooks/useAutoIncrement';

function App() {
  const [technos] = useState([]);
  const STORAGE_KEY = 'technos';
  const [localStorageTechno, setLocalStorageTechno] = useLocalStorage(STORAGE_KEY, technos);
  
  const dispatch = useDispatch();//accés en écriture au state de redux
  const technoData = useSelector((state) => state.technos.technos);

  const [valIncrement, setValIncrement] = useIncrement(5,4);
  useEffect(()=>{
    //setTechnos(localStorageTechno)//chargement du stockage local vers le state local
    dispatch(setTechnosData(localStorageTechno))//dans le state redux
  }, []);

  useEffect(()=>{
    setLocalStorageTechno(technoData)
  }, [technoData]);

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

  //function handleAddTechno(techno){
    
    /*const _techno = [...technos]
    techno.id = technoId;
    setTechnoId(technoId + 1);
    _techno.push(techno);
    //console.log(_techno);
    setTechnos(_techno);*/

    //techno.id = uuidv4();
    //setTechnos([...technos, techno]);
    
    //setTechnos([...technos, {...techno, id:uuidv4()}]);
  //}

  /*function handleDeleteTechno(id){
    setTechnos(technos.filter((techno)=>techno.id !== id));
}*/

  return (
    <>
    <Menu/>
    <Checkbox></Checkbox>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/add" element={<TechnoAdd/>} />
      <Route path="/list" element={<TechnoList/>} />
    </Routes>
    </>
  );
}

export default App;
