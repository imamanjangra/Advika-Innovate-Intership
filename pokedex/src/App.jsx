
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import PokemonDetailsPage from './Pages/PokemonDetailsPage'



function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/detailsPage' element={<PokemonDetailsPage/>}/>
      </Routes>
    </>
  )
}

export default App
