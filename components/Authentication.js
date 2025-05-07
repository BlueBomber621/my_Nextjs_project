"use client";

import { useState, useEffect } from "react";

const AUTH_USER = {
  email: "test@example.com",
  password: "password123",
};

export default function Authentication() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState(null);

  const [error, setError] = useState("");

  useEffect(() => {
    const save = sessionStorage.getItem("authUser");
    if (save) {
      setUser(JSON.parse(save));
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (email === AUTH_USER.email && password === AUTH_USER.password) {
      const u = { email };

      sessionStorage.setItem("authUser", JSON.stringify(u));
      setUser(u);
    } else {
      setError("Invalid Login, please try again.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("authUser");
    setUser(null);
    setEmail("");
    setPassword("");
  };

  if (user) {
    return (
      <div className="space-y-4">
        <p className="text-primary-700">
          Signed in as <strong>{user.email}</strong>
        </p>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 dark:hover:bg-red-400"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleLogin} className="space-y-4 max-w-sm mx-auto">
      {error && <p className="text-red-500">{error}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />

      <button
        type="submit"
        className="mx-2 px-4 py-2 bg-primary-300 text-white rounded hover:bg-primary-400 dark:bg-primary-200 dark:hover:bg-primary-100"
      >
        Sign In
      </button>
    </form>
  );
}
