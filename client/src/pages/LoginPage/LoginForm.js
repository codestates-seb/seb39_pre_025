/* eslint-disable dot-notation */
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios
      .post(`${process.env.REACT_APP_API_URI}/login`, userInfo)
      .then((response) => {
        const accessToken = response.headers.authorization;
        localStorage.setItem('accessToken', accessToken);
        const loginStatus = true;
        localStorage.setItem('loginStatus', loginStatus);
        axios.defaults.headers.common['Authorization'] = `${accessToken}`;
        navigate('/');
      })
      .catch((err) => console.log(`${err}`));
  };

  return (
    <LoginFormLayout>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={onSubmit}
        onChange={onChange}
      >
        <label htmlFor="email">
          Email <br />
          <input type="email" name="email" />
        </label>
        <label htmlFor="pasword">
          Password <br />
          <input type="password" name="password" />
        </label>
        <br />
        <button
          type="submit"
          style={{
            height: '30px',
            backgroundColor: '#078AFF',
            borderRadius: '5px',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Log in
        </button>
      </form>
    </LoginFormLayout>
  );
}

export default LoginForm;

const LoginFormLayout = styled.div`
  width: 250px;
  height: 230px;
  background-color: #fff;
  box-shadow: 3px 3px 30px rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 1rem;
  & form {
    width: 100%;
    input {
      width: 100%;
      height: 25px;
    }
  }
`;
