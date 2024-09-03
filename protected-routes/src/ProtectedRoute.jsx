import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export default function ProtectedRoute({ allowedRoles }) {
  const { isAuthed } = useAuth();
  console.log(isAuthed)

  return (
    <>
      {isAuthed.isLoggedIn && isAuthed.roles.find(role => allowedRoles.includes(role)) ? <Outlet /> : <Navigate to="/login" />}
    </>
  )
}