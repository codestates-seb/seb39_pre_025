import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow } from '@fortawesome/fontawesome-free-brands';

function Navbar() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  const onSubmit = (event) => {
    // 쿼리파라미터로 들어가는건지 확인받기
    event.preventDefault();
    axios
      .get('/questions', { params: { keyword } })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(`${err}`));
  };

  const handleNavbarPopup = () => {
    return setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    return navigate('/');
  };

  const handleSubmit = () => {};
  return (
    <NavbarLayout>
      <NavLinkBox onClick={handleNavbarPopup}>
        {isOpen ? (
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/register">회원가입</Link>
            </li>
            <li>
              <Link to="/mypage">마이페이지</Link>
            </li>
          </ul>
        ) : (
          <GiHamburgerMenu />
        )}
      </NavLinkBox>
      <LogoButton type="button" onClick={handleLogoClick}>
        <FontAwesomeIcon icon={faStackOverflow} size="2x" />
        <span>
          stack <b>overflow</b>
        </span>
      </LogoButton>
      <div>
        <form onChange={onChange} onSubmit={onSubmit}>
          <label htmlFor="search">
            <input id="search" type="text" />
          </label>
          <input type="submit" value="질문 검색" />
        </form>
      </div>
      <ButtonBox>
        <Button onClick={handleSubmit}>Log in</Button>
        <Button onClick={handleSubmit}>Sign up</Button>
      </ButtonBox>
    </NavbarLayout>
  );
}

export default Navbar;

// TODO: 검색창 어떻게 해야 이쁘게 가운데로 보낼까 고민하다 일단 넘겼습니다..ㅎㅎ
// TODO: 햄버거메뉴 클릭시 팝업 위치가 navbar 아래로 가고 햄버거메뉴도 x모양으로 바뀌도록 추후 구현?

const NavbarLayout = styled.div`
  border: 1px solid gray;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinkBox = styled.div`
  display: flex;
`;

const LogoButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 10%;
`;

const ButtonBox = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 80px;
  height: 100%;
  padding-right: 10px;
`;
