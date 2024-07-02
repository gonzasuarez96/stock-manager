"use client";
import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/users";
import Cookies from "universal-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const router = useRouter();
  const cookies = useMemo(() => new Cookies(), []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = cookies.get("token");

        if (token) {
          setLoggedIn(true);
          console.log(token);
        } else {
          // setLoggedIn(false);
          console.log("no existe token");
          router.push("/login");
        }
      } catch (error) {
        console.error("Error al verificar la autenticación:", error);
      }
    };
    checkAuthentication();
  }, [router, cookies]);

  const login = async (userData) => {
    try {
      const result = await loginUser(userData);
      console.log(result);
      if (result.success) {
        cookies.set("token", result.token);
        setLoggedIn(true);
        router.push("/dashboard");
      } else {
        console.error("Error al iniciar sesión:", result.message);
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  const logout = () => {
    cookies.remove("token");
    setLoggedIn(false);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
