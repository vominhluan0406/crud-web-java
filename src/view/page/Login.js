import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Login(props) {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(JSON.stringify({ username, password }));
  };

  return (
    <div
      style={{
        width: "30%",
        margin: "8%",
        padding: "5%",
        alignItems: "center",
        display: "inline-block",
        backgroundColor: "burlywood",
      }}
    >
      <form onSubmit={onSubmit}>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
            value={username}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
