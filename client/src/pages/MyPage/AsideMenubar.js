import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function AsideMenubar() {
  const [navStyle, setNavStyle] = useState(0);
  const handleNavStyle = (id) => {
    setNavStyle(id);
  };
  const asideMenuList = [
    { id: 1, name: 'Questions', element: '/mypage' },
    { id: 2, name: 'My Page', element: '/mypage' },
    { id: 3, name: 'Edit Profile', element: '/mypage' },
    { id: 4, name: 'My Questions', element: '/mypage' },
  ];

  return (
    <AsideMenuBarLayout>
      <h2>Home</h2>
      <Nav>
        {asideMenuList.map(({ id, name, element }) => {
          return (
            <NavItem
              key={id}
              onClick={() => handleNavStyle(id)}
              changeNavStyle={navStyle === id}
            >
              <NavLink to={element}>{name}</NavLink>
            </NavItem>
          );
        })}
      </Nav>
    </AsideMenuBarLayout>
  );
}

export default AsideMenubar;

const AsideMenuBarLayout = styled.div`
  width: 150px;
  padding: 1rem;
  border-right: 2px solid #eee;

  &h2 {
    text-align: left;
  }
`;
const Nav = styled.ul`
  text-align: center;
  margin-top: 10px;
`;
const NavItem = styled.li`
  width: 100%;
  height: 30px;
  font-size: 15px;
  line-height: 24px;
  padding: 10px;
  list-style: none;
  background-color: #fff;
  color: #000;
  .active {
    background-color: #f27622;
    color: #fff;
  }
`;
const NavLink = styled(Link)`
  margin-right: 70px;
  color: inherit;
  &:last-child {
    margin-right: 0;
  }
`;
