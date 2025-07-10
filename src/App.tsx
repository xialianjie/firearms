import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Categories from "@/pages/Categories";
import Detail from "@/pages/Detail";
import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: (value: boolean) => {},
  logout: () => {},
});

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </AuthContext.Provider>
  );
}
