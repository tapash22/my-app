import React, { useState } from "react";
import classes from "./Form.module.css";

function Form() {
  const [inputs, setInputs] = useState({});
  function handleForm(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  function submitForm(e) {
    e.preventDefault();
    console.log(inputs);
  }

  return (
    <div className={classes.login}>
      <h1>Login Form</h1>
      <form onSubmit={submitForm}>
        <input
          placeholder="name"
          name="name"
          type="text"
          required
          value={inputs.name || ""}
          onChange={handleForm}
        />
        <input
          placeholder="Email"
          name="email"
          type="email"
          required
          value={inputs.email || ""}
          onChange={handleForm}
        />
        <input
          placeholder="Password"
          name="pass"
          value={inputs.pass || ""}
          onChange={handleForm}
          type="password"
        />
        <textarea
          placeholder="address"
          name="adderss"
          value={inputs.adderss || ""}
          onChange={handleForm}
          type="text"
        ></textarea>
        <button className={classes.btn} type="submit">
          save
        </button>
      </form>
    </div>
  );
}

export default Form;
