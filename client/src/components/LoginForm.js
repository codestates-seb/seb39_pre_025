import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions';

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(loginUser(userInfo));
    if (res.payload.loginSuccess === true) {
      return navigate('/');
    }
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
          <input type="email" />
        </label>
        <label htmlFor="pasword">
          Password <br />
          <input type="password" />
        </label>{' '}
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