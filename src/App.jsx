import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import Input from './Input';
import Show from './Show';
import Edit from './Edit';

export default function App() {
  return (
    <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      <Route path='/input' element={<Input/>}/>
      <Route path='/show' element={ <Show/>}/>
      <Route path='/edit/:id' element={ <Edit/>}/>
      </Routes>
    </BrowserRouter>
  )
}
