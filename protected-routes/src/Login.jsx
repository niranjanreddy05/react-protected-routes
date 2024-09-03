import { useAuth } from "./AuthProvider"

export default function Login() {
  const { isAuthed, login, logout } = useAuth();
  const toggleLogin = () => {
    login()
  }
  const toggleLogout = () => {
    logout()
  }
  return (
    <button onClick={isAuthed ? () => toggleLogout() : () => toggleLogin()}>
      { isAuthed ? 'Logout' : 'Login'}
    </button>
  )
}