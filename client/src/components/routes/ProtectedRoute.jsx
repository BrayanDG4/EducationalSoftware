import { useAuthStore } from "../../store/authStore";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const { currentUser, loading } = useAuthStore();

  if (loading) return <h1>CARGANDO...</h1>;

  if (!currentUser) return <Navigate to={"/login"} />;

  return <>{children}</>;
}
