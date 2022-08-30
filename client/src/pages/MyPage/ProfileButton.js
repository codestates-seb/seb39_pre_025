import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function ProfileButton() {
  const [currentTab, setCurrentTab] = useState(0);
  const menuArr = [
    { id: 0, name: 'Profile' },
    { id: 1, name: 'My Question' },
  ];
  const selectMenuHandler = (id) => {
    setCurrentTab(id);
  };
  const navigate = useNavigate();

  const editMyProfile = () => {
    navigate('/edit-mypage');
  };
  const deleteMyAccount = () => {
    navigate('/delete-account');
  };

  return (
    <ProfileButtonLayout>
      <TabMenu>
        {menuArr.map(({ name, id }) => {
          return (
            <button
              type="button"
              key={id}
              className={currentTab === id ? 'submenu focused' : 'submenu'}
              onClick={() => selectMenuHandler(id)}
            >
              {name}
            </button>
          );
        })}
      </TabMenu>

      <PersonalInFoBox>
        <h3>PERSONAL INFORMATION</h3>
        <button type="button" onClick={editMyProfile}>
          Edit Profile
        </button>
        <button type="button" onClick={deleteMyAccount}>
          Delete Account
        </button>
      </PersonalInFoBox>
    </ProfileButtonLayout>
  );
}

export default ProfileButton;

const ProfileButtonLayout = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TabMenu = styled.ul`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  display: flex;
  justify-content: space-evenly;
  list-style: none;

  .submenu {
    background-color: #fff;
    width: 50%;
    cursor: pointer;
    border-radius: 30px;
    border: none;
    margin-right: 10px;
    background-color: transparent;
  }

  .focused {
    background-color: #f27622;
    color: rgba(255, 255, 255, 1);
    transition: 0.3s;
  }

  & div.desc {
    text-align: center;
  }
`;

const PersonalInFoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & h3 {
    font-size: 17px;
  }
  & button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
