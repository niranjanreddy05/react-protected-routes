import { createContext, useContext, useState } from "react"

const authContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthed, setAuth] = useState(false);
  const login = () => {
    setAuth(true);
  }
  const logout = () => {
    setAuth(false);
  }
  return (
    <>
      <authContext.Provider value={{ isAuthed, login, logout }}>
        {children}
      </authContext.Provider>
    </>)
}

export const useAuth = () => useContext(authContext)