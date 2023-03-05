import React, { useState } from "react";

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
      <input type="submit" value="DONE" />
    </form>
  );
}

export default Form;
