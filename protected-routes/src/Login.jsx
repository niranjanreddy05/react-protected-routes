import { useAuth } from "./AuthProvider"

export default function Login() {
  const { isAuthed, login, logout } = useAuth();
  const toggleLogin = (role) => {
    login(role)
  }
  const toggleLogout = () => {
    logout()
  }
  return (
    <>
      {
        !isAuthed.isLoggedIn ?
          <div>
            <button onClick={() => toggleLogin(['user'])}>
              Login in as user
            </button>
            <button onClick={() => toggleLogin(['admin', 'user'])}>
              Login in as admin
            </button>
          </div> : <button onClick={() => toggleLogout()}>Logout</button>
    }

    </>
  )
}