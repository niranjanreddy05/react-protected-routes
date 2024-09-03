import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export default function ProtectedRoute() {
  const { isAuthed } = useAuth();
  return(
    <>
      {isAuthed ? <Outlet/>: <Navigate to="/login"/>}
    </>
  )
}