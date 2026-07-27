import { createContext, useEffect, useMemo, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // NEW
  const [loading, setLoading] = useState(true);

  // ---------------- Restore Authentication ----------------

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("shopnest-user");
      const savedToken = localStorage.getItem("shopnest-token");

      if (savedUser && savedToken) {
        setUser(JSON.parse(savedUser));
        setToken(savedToken);
      }
    } catch (error) {
      console.error("Failed to restore authentication:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // ---------------- Login ----------------

  const login = (token, userData) => {
    localStorage.setItem("shopnest-token", token);
    localStorage.setItem(
      "shopnest-user",
      JSON.stringify(userData)
    );

    setToken(token);
    setUser(userData);
  };

  // ---------------- Register ----------------

  const register = (token, userData) => {
    localStorage.setItem("shopnest-token", token);
    localStorage.setItem(
      "shopnest-user",
      JSON.stringify(userData)
    );

    setToken(token);
    setUser(userData);
  };

  // ---------------- Logout ----------------

  const logout = () => {
    localStorage.removeItem("shopnest-token");
    localStorage.removeItem("shopnest-user");

    setUser(null);
    setToken(null);
  };

  const value = useMemo(
    () => ({
      user,
      token,
      loading,
      isAuthenticated: !!token,
      login,
      register,
      logout,
    }),
    [user, token, loading]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;