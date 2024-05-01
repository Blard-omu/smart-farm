import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
//import Login from "./auth/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Signup} />
        <Route path="/login" Component={Login} />
        <Route path="/onboarding" Component={Onboarding} />
        <Route path="/dashboard" Component={Dashboard} />
      </Routes>
    </div>
  );
}

export default App;
