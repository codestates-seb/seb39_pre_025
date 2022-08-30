import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Profile() {
  const [myProfileList, setMyProfileList] = useState(null);
  const navigate = useNavigate();

  const getProfile = async () => {
    const response = await axios.get('/mypage');
    setMyProfileList(response.data);
  };
  const profileEditHandler = () => {
    navigate('/edit-mypage');
  };

  useEffect(() => {
    getProfile();
  }, []);

  const editMyProfile = () => {
    navigate('/edit-mypage');
  };
  const deleteMyAccount = () => {
    navigate('/delete-account');
  };

  return (
    <ProfileLayout>
      <div>
        <MyPagePofileBox>
          <img
            src="https://w.namu.la/s/c451911a005bf6c635b23780af015c08c96a3203a60c8a5daed247daba8b61c3ab5d107adc3b653f6725f0967990f7b439381a6b3f3542805a7fac3b61445e0cad18f2905a760f4f57256e399dba112eb2fd170d7df7eb83d3183adfc38fe1476d4685eecc6616c91a59c9f69af7fead"
            alt="나의 프로필 이미지"
          />
        </MyPagePofileBox>

        <ProfileButton>Profile</ProfileButton>
        <MyQuestionButton>My Question</MyQuestionButton>
        <PersonalInFoBox>
          <h3>PERSONAL INFORMATION</h3>
          <button type="button" onClick={editMyProfile}>
            Edit Profile
          </button>
          <button type="button" onClick={deleteMyAccount}>
            Delete Account
          </button>
        </PersonalInFoBox>
      </div>

      <ProfileBox>
        {myProfileList?.map((profile) => {
          return (
            <div>
              <ProfileTitle>{profile.title}</ProfileTitle>
              <ProfileContent>{profile.content}</ProfileContent>
            </div>
          );
        })}

        <div>
          <ProfileTitle>자기소개를 작성 하세요</ProfileTitle>
          <ProfileContent>재밌는 소개글을 작성 해 보세요</ProfileContent>
        </div>
      </ProfileBox>
      <ProfileEditButton type="submit" onClick={profileEditHandler}>
        {' '}
        edit button{' '}
      </ProfileEditButton>
    </ProfileLayout>
  );
}

export default Profile;
const ProfileLayout = styled.div`
  display: flex;
`;

const MyPagePofileBox = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PersonalInFoBox = styled.div`
  border: 1px solid #000;
`;

const ProfileButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #f27622;
  color: #fff;
  border-radius: 40px;
  border: none;
`;

const MyQuestionButton = styled.button`
  background-color: transparent;
  border: none;
`;

const ProfileBox = styled.div`
  width: 600px;
  height: 500px;
  border: 1px solid #000;
  box-sizing: border-box;
  padding: 1rem;
`;
const ProfileTitle = styled.h2``;

const ProfileContent = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid #000;
  border-radius: 50px;
  box-sizing: border-box;
  display: flex;
  padding: 3rem;
`;
const ProfileEditButton = styled.button`
  width: 80px;
  height: 30px;
`;
