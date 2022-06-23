import React from "react";

import { useState } from "react";
import { useSignin } from "../../Hooks/useSignin";
import "./Signin.css";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [dispName, setDispName] = useState("");
  const [prof, setProf] = useState("");
  const { signin, isPending, error } = useSignin();
  const [profError, setProfError] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
    signin(email, pass, dispName, prof);
    setDispName("");
    setEmail("");
    setPass("");
    setProf("");
  };
  const profHandler = (e) => {
    // setProf(null);
    // let file = e.target.files;
    // if (!file) {
    //   setProfError("you must import a profile pic");
    //   return;
    // }
    // if (!file.type.includes("image")) {
    //   setProfError("you must choose a pic");
    //   return;
    // }
    // if (file.size > 100000) {
    //   setProfError("choose a lighter file");
    //   return;
    // }
    // setProfError(null);
    // setProf(file);
  };
  return (
    <div className='signin-mother-div'>
      <h2 className='signin-header'>Sign up</h2>
      <form className='signin-form' onSubmit={submitHandler}>
        <label className='signin-mail'>
          email:
          <input
            type='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className='signin-pass'>
          password:
          <input
            type='password'
            required
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </label>
        <label className='signin-disp-name'>
          display name:
          <input
            type='text'
            required
            value={dispName}
            onChange={(e) => setDispName(e.target.value)}
          />
        </label>
        <label className='signin-prof'>
          profile thumbnail:
          <input type='file' value={prof} onChange={profHandler} />
        </label>
        {!isPending && <button className='signin-btn'>submit</button>}
        {isPending && <button className='signin-btn'>submiting</button>}
        {profError && <span>{profError}</span>}
      </form>
    </div>
  );
}
