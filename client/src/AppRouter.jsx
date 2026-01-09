import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";

const isLoggedIn = () => !!localStorage.getItem("token");

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={isLoggedIn() ? <App /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
