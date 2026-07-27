import { Navigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

function ProtectedRoute({ children }) {
  const {
    isAuthenticated,
    loading,
  } = useAuth();

  // Wait until authentication is restored
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <h2 className="text-2xl font-semibold text-white">
          Loading...
        </h2>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;