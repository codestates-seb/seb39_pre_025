import React, { useState } from 'react';

function Register() {
  const [userInfo, setuserInfo] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setuserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <form htmlFor="register" onSubmit={onSubmit} onChange={onChange}>
        <label htmlFor="email">
          Email
          <input id="email" type="text" />
        </label>
        <label htmlFor="name">
          Name
          <input id="name" type="text" />
        </label>
        <label htmlFor="password">
          <input id="password" type="text" />
        </label>
        <label htmlFor="confirm_password">
          Confirm Password
          <input id="confirm_password" type="text" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
