import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Navbar() {
  const [keyword, setKeyword] = useState('');

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

  return (
    <div>
      <div>
        <form onChange={onChange} onSubmit={onSubmit}>
          <label htmlFor="search">
            <input id="search" type="text" />
          </label>
          <input type="submit" value="질문 검색" />
        </form>
        <div>
          <span>단건 검색 테스트용</span>
          <div>테스트</div>
        </div>
      </div>
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
    </div>
  );
}

export default Navbar;
