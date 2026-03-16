import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // agar token nahi hai to login page par bhejo
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // agar token hai to component render karo
  return children;
};

export default ProtectedRoute;
