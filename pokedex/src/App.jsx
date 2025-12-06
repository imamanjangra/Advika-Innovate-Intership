
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import PokemonDetailsPage from './Pages/PokemonDetailsPage'
import SerchResultpage from './Pages/SerchResultpage'
import Layout from './Layout/Layout'



function App() {


  return (
    <>
      <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/detailsPage/:id' element={<PokemonDetailsPage/>}/>
            <Route path='/Serch/:name' element={<SerchResultpage/>}/>
          </Route>
      </Routes>
    </>
  )
}

export default App
