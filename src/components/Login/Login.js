import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import { useAuth } from "./Authen";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://localhost:7218/api/User/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, remember }),
    });

    if (response.ok) {
      const data = await response.json();
      setUser(data);
      toast.success("Login successful!", {
        onClose: () => navigate("/"),
      });
    } else {
      toast.error("Login failed!");
    }
  };

  return (
    <div className="full-height center-content">
      <ToastContainer />
      <div className="cardLogin">
        <h2 className="fw-bold mb-2 text-center">Sign in</h2>
        <p className="text-white-50 mb-3 text-center">
          Please enter your login and password!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input-group-sign mb-4">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group-sign mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="checkbox-group">
            <div>
              <input
                type="checkbox"
                id="rememberMe"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>
          <button type="submit" className="mb-4 w-100">
            Sign in
          </button>
        </form>
        <div className="sign-up-link">
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
