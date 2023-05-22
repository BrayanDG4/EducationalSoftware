import { useAuthStore } from "../../store/authStore";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const { currentUser, loading } = useAuthStore();

  if (loading) {
    return (
      <div className="h-screen bg-endsection">
        <div className="flex justify-center items-center">
          <h1 className="font-semibold text-4xl my-4 text-white">Acceso no autorizado</h1>
        </div>
        <div className="flex justify-center items-center">
          <span class="loader"></span>
        </div>
      </div>
    );
  }
  if (!currentUser) return <Navigate to={"/login"} />;

  return <>{children}</>;
}
