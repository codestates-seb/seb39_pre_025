import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

function Register() {
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();

  const [userInfo, setuserInfo] = useState({
    email: '',
    username: '',
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
    const res = await axios.post(
      `${process.env.REACT_APP_API_URI}/users/register`,
      userInfo,
    );
    console.log(res);
    // if (res.status === '200') {
    // const { username } = res.data;
    // localStorage.setItem('username', username);
    return navigate('/login');

    // return alert('화원가입에 실패하였습니다. 입력한 정보를 확인해주세요');
  };

  return (
    <RegisterLayout>
      <form htmlFor="register" onSubmit={onSubmit} onChange={onChange}>
        <label htmlFor="user-id">
          Display Name <br />
          <input id="user-id" name="username" type="text" />
        </label>
        <label htmlFor="email">
          Email <br />
          <input id="email" name="email" type="email" />
        </label>
        <label htmlFor="password">
          Password <br />
          <input id="password" name="password" type="password" />
        </label>
        <span>
          Passwords must contain at least eight characters, including at least 1
          letter and 1 number.
        </span>
        <br />
        <label htmlFor="confirm_password">
          Confirm Password <br />
          <input id="confirm_password" name="confirmPassword" type="password" />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </RegisterLayout>
  );
}

export default Register;

const RegisterLayout = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 600px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  & form {
    display: flex;
    flex-direction: column;

    width: 100%;

    & label {
      width: 100%;
    }
    & input {
      width: 95%;
      height: 20px;
      margin-bottom: 1rem;
    }
    & span {
      font-size: 10px;
      text-align: left;
    }
    & button {
      color: #fff;
      width: 100%;
      height: 30px;
      background-color: #078aff;
      border-radius: 5px;
      border: none;
      cursor: pointer;
    }
  }
`;
