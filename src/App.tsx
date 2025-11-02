import { Routes, Route } from  'react-router-dom'
import Hero from './components/HeroSection/Hero'
import Login from './Pages/Login'
import Signup from './Pages/Signup'


function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
