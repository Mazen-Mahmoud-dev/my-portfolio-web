import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Layout from './Layouts/Layout'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

const App = () => {
  return (
    
    <Routes>
      <Route path='/' element={<Layout><Home /></Layout>} />
      <Route path='/about' element={<Layout><About /></Layout>} />
      <Route path='/portfolio' element={<Layout><Portfolio /></Layout>} />
      <Route path='/contact' element={<Layout><Contact /></Layout>} />
    </Routes>
  )
}

export default App
