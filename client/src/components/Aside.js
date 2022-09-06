import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Aside() {
  return (
    <AsideLayout>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/questions">Questions</Link>
        </li>
      </ul>
    </AsideLayout>
  );
}

export default Aside;

const AsideLayout = styled.div`
  position: absolute;
  top: 60px;
  background-color: #fff;
  width: 200px;
  display: flex;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);

  ul {
    margin-top: 2rem;
    width: 100%;
    height: 230px;

    & li {
      margin-left: -2.5rem;
      width: 200px;
      list-style: none;
      line-height: 50px;
      text-align: center;
      box-sizing: border-box;
    }
    li:hover {
      background-color: #ddd;
      color: #000;
      border-right: 2px solid #f27622;
    }
    a {
      text-decoration: none;
      color: #444;
      cursor: pointer;
    }
  }
`;
