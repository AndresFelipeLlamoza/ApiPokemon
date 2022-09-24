import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './views/Home'
import Pokemons from './views/Pokemons';
import Berries from './views/Berries';
import Items from './views/Items';
import Regions from './views/Regions'
import About from './views/About';


function App() {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Berries' element={<Berries/>}></Route>
        <Route path='/Pokemons' element={<Pokemons/>}></Route>
        <Route path='/Items' element={<Items/>}></Route>
        <Route path='/Regions' element={<Regions/>}></Route>
        <Route path='/About' element={<About/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
