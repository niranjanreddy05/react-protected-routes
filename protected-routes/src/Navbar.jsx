import { Link } from 'react-router-dom'

export default function Navbar() {
  return(
    <>
      <Link to="/Home" style={{margin: '5px'}}>Home</Link>
      <Link to="/Login" style={{margin: '5px'}}>Login</Link>
      <Link to="/Tasks" style={{margin: '5px'}}>Tasks</Link>
      <Link to="/People" style={{margin: '5px'}}>People</Link>
      <Link to="/Admin" style={{margin: '5px'}}>Admin</Link>
    </>
  )
}