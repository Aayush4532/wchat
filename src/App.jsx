import React, { useState, useEffect } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f4f4f4",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            border: "5px solid rgba(0, 0, 0, 0.1)",
            borderTop: "5px solid #007bff",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        />
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  }
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />} // Redirect to /login if not logged in
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />} // Redirect to / if already logged in
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <Signup />} // Redirect to / if already logged in
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;