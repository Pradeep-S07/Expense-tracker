import React from "react";

export const Register = () => {
  return (
    <div className="form-wrapper">
      <h2>Register</h2>
      <form className="form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};