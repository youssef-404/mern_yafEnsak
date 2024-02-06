import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './component/Layout.jsx'
import Home from './pages/Home.jsx'
import Formation from './pages/Formation.jsx'
import Participer from './pages/Participer.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path='formation' element={<Formation/>}/>
          <Route path='participer' element={<Participer/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
