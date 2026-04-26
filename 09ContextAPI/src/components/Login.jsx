import React, { useState, useContext } from "react";

import UserContext from "../context/UserContext";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password});
  };
  return (
    <>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="username"
        
      ></input>
      <input type="text"
       value={password}
        onChange={(e) => setPassword(e.target.value)} placeholder="Enter password"></input>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Login;
