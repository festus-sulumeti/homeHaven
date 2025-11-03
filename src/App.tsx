import { Routes, Route } from "react-router-dom";
import Hero from "./components/HeroSection/Hero";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { ProtectedRoute } from "./components/ProtectedRoute";
import UserDashboardShell from "./user/dashboard/Dashboard";
import AdminDashboardShell from "./admin/dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/user/dashboard"
          element={
            <ProtectedRoute requiredRole="user">
              <UserDashboardShell />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboardShell />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
