import {Routes, Route} from 'react-router-dom'
import './index.css'
import Main from './pages/Main'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Create from './pages/Create'
import Recipe from './pages/Recipe'

function App() {
  return (
      <Routes>
        <Route path='' element={<Main/>}/>
        <Route path='/home/:name' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/create/:name' element={<Create/>}/>
        <Route path='/recipe/:name' element={<Recipe/>}/>
      </Routes>
  )
}

export default App
