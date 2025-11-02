import { Routes, Route } from "react-router-dom";
import Hero from "./components/HeroSection/Hero";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { ProtectedRoute } from "./components/ProtectedRoute";
import UserDashboard from "./user/dashboard/UserDashboard";
import AdminDashboard from "./admin/dashboard/AdminDashboard";

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
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
