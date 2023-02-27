import './App.css';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/landing' element={<>
            <Navbar />
            <Landing />
          </>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
