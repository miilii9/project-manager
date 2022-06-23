import React from "react";

import { useState } from "react";
import { useLogin } from "../../Hooks/useLogin";
import "./Login.css";
export default function Login() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const { login, error, isPending } = useLogin();
  const formHandler = (e) => {
    e.preventDefault();
    login(mail, pass);
    setMail("");
    setPass("");
  };
  return (
    <div className='login-mother-div'>
      <div className='login-div'>
        <h2 className='login-header'>Login</h2>
        <form className='login-form' onSubmit={formHandler}>
          <label>
            email:
            <input
              type='text'
              placerholder='mario@yahoo.com'
              required
              className='login-mail-input'
              value={mail ? mail : ""}
              onChange={(e) => setMail(e.target.value)}
            />
          </label>
          <label>
            password:
            <input
              type='password'
              required
              className='login-pass-input'
              value={pass ? pass : ""}
              onChange={(e) => setPass(e.target.value)}
            />
          </label>
          {!isPending && <button className='login-btn'>Login</button>}
          {isPending && <button className='login-btn'>Loading</button>}
        </form>
      </div>
    </div>
  );
}
