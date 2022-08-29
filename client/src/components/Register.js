import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const navigate = useNavigate();

  const [userInfo, setuserInfo] = useState({
    email: '',
    userId: '',
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

  const onSubmit = async (e) => {
    e.preventDefault();
    if (userInfo.password === userInfo.confirmPassword) {
      await axios
        .post('/users/register', userInfo)
        .then(() => navigate('/login'));
    }
    return alert('잘못된 입력입니다');
  };

  return (
    <div>
      <form htmlFor="register" onSubmit={onSubmit} onChange={onChange}>
        <label htmlFor="email">
          Email
          <input id="email" name="email" type="email" />
        </label>
        <label htmlFor="user-id">
          Name
          <input id="user-id" name="userId" type="text" />
        </label>
        <label htmlFor="password">
          Password
          <input id="password" name="password" type="password" />
        </label>
        <label htmlFor="confirm_password">
          Confirm Password
          <input id="confirm_password" name="confirmPassword" type="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
