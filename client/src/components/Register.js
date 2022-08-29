import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { newUser } from '../redux/actions';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  const onSubmit = async (e) => {
    e.preventDefault();
    if (userInfo.password !== userInfo.confirmPassword) {
      return alert('입력하신 비밀번호가 맞지 않습니다.');
    }
    const res = await dispatch(newUser(userInfo));
    if (res.payload.success === true) return navigate('/login');
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
