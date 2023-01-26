import './css/app.css';
import Menu from './components/Menu';
import AppRoutes from './components/AppRoutes';
import { useState, useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import { setTechnosData } from './feature/technos.slice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [technos] = useState([]);
  const STORAGE_KEY = 'technos';
  const [localStorageTechno, setLocalStorageTechno] = useLocalStorage(STORAGE_KEY, technos);
  
  const dispatch = useDispatch();//accés en écriture au state de redux
  const technoData = useSelector((state) => state.technos.technos);

  useEffect(()=>{
    //setTechnos(localStorageTechno)//chargement du stockage local vers le state local
    dispatch(setTechnosData(localStorageTechno))//dans le state redux
  }, []);

  useEffect(()=>{
    setLocalStorageTechno(technoData)
  }, [technoData]);

  

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
    <AppRoutes></AppRoutes>
    </>
  );
}

export default App;
