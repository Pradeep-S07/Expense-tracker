import React from "react";

export const Login = () => {
  return (
    <div className="form-wrapper">
      <h2>Login</h2>
      <form className="form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
