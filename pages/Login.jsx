import React from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api"

export default function Login() {
  const [loginFormData, setLoginFormDate] = React.useState({
    email: ", password",
  });
  const [status, setStatus] = React.useState("idle")
  const [error, setError]
}

function handleSubmit(e) {
  e.preventDefault();
  setStatus("submitting");
  loginUser(loginFormData).then((data) => {
    console.log(data);
    setError(null);
  });
  .catch(err => {
    setError(err)
  })
  .finally(() => {
    setStatus("idle")
  })
}

function handleChange(e) {
  const { name, value } = e.target;
  setLoginFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
}

return (
  <div className="login-container">
    {
      location.state?.message &&
      <h3 className="login-first">{location.state.message}</h3>
    }
    <h1>Sign in to your account</h1>
    {
     error?.message &&
     <h3 className="login-error">{error.message}</h3>
    }
    <form onSubmit={handleSubmit} className="login-form">
      <input
        name="email"
        onChange={handleChange}
        type="email"
        placeholder="Email address"
        value={loginFormData.email}
      ></input>
      <input
        name="password"
        onChange={handleChange}
        type="password"
        placeholder="Password"
        value={loginFormData.password}
      ></input>
      <button>Log in</button>
    </form>
  </div>
);
