import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import People from './People';
import Tasks from './Tasks';
import Admin from './Admin';
import { AuthProvider } from './AuthProvider';
import ProtectedRoute from './ProtectedRoute';

function App() {

  return (
    <>
      <Navbar />
      <AuthProvider>
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route element={<ProtectedRoute allowedRoles={['user', 'admin']}/>}>
            <Route path="/Tasks" element={<Tasks />}></Route>
            <Route path="/People" element={<People />}></Route>
          </Route>
          <Route element={<ProtectedRoute allowedRoles={['admin']}/>}>
            <Route path="/Admin" element={<Admin />}></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
