import Home from './pages/Home'
import './css/app.css';
import Menu from './components/Menu';
import { Fragment } from 'react';
import TechnoAdd from './pages/TechnoAdd';

function App() {
  return (
    <>
      <Menu/>
      <Home/>
      <TechnoAdd/>
    </>
  );
}

export default App;
