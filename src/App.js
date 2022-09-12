
import './App.css';
import NavBar from '../src/components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <NavBar />
        <Routes>

            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/tienda' element={ <ItemListContainer/>}/>
            <Route path='/tienda/:categoryId' element={ <ItemListContainer/>}/>
            <Route path='/item/:productId' element={ <ItemDetailContainer/>}/>

        </Routes>
        
      </div>

    </BrowserRouter>

    
  );
}

export default App;
