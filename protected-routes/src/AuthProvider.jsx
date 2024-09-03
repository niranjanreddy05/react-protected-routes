import { createContext, useContext, useState } from "react"

const authContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthed, setAuth] = useState({isLoggedIn: false, roles:[]});
  const login = (role = []) => {
    setAuth(curObj => {return {...curObj, isLoggedIn: true, roles: role }});
  }
  const logout = () => {
    setAuth(curObj => {return {...curObj, isLoggedIn: false, roles: []}});
  }
  return (
    <>
      <authContext.Provider value={{ isAuthed, login, logout }}>
        {children}
      </authContext.Provider>
    </>)
}

export const useAuth = () => useContext(authContext)