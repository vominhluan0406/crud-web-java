import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import {useHistory} from 'react-router-dom'

function Login(props) {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const history = useHistory();


  const SignIn = async (e) => {
    e.preventDefault();
    try {
      const data = JSON.stringify({ username: 'user', password: 'admin' });
      const res = await axios({
        method: 'post',
        url: 'http://localhost:8080/api/login',
        data: data,
        headers: { "Content-Type": "application/json" },
  
      });
      console.log('response', res.data.access_token);
      localStorage.setItem('token',res.data.access_token)
      history.push("/");
    } catch (err) {
      console.log('login err', err);
    }
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
      <form>
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

        <button type="submit" className="btn btn-primary btn-block"  onClick={(e)=>SignIn(e)}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
