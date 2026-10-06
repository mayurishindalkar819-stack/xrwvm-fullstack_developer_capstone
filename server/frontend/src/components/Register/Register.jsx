import React from "react";

const Register = () => {
  return (
    <div className="container mt-5">
      <h1>Sign-up</h1>

      <form>
        <div className="mb-3">
          <label>Username</label>
          <input type="text" name="username" className="form-control" />
        </div>

        <div className="mb-3">
          <label>First Name</label>
          <input type="text" name="firstName" className="form-control" />
        </div>

        <div className="mb-3">
          <label>Last Name</label>
          <input type="text" name="lastName" className="form-control" />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input type="email" name="email" className="form-control" />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input type="password" name="password" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
