import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// 유저의 프로필 이미지와 정보들 나타나는 컴포넌트 입니다.
function ProfileImage() {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    axios.post('./api/user-profile').then((res) => {
      console.log(res.data.body);
      setUserInfo(res.data.body);
    });
  });
  return (
    <ProfileImageLayout>
      {userInfo?.map((user) => {
        return (
          <ProfileImageLayout>
            <MyPagePofileBox>
              <img src={user.image} alt={user.id} />
            </MyPagePofileBox>
            <ProfileUserInfo>
              <UserName>{user.name}</UserName>
              <div>
                <UserCreated> {user.created}</UserCreated>
                <UserId>{user.userId}</UserId>
              </div>
            </ProfileUserInfo>
          </ProfileImageLayout>
        );
      })}

      <MyPagePofileBox>
        <img
          src="https://w.namu.la/s/c451911a005bf6c635b23780af015c08c96a3203a60c8a5daed247daba8b61c3ab5d107adc3b653f6725f0967990f7b439381a6b3f3542805a7fac3b61445e0cad18f2905a760f4f57256e399dba112eb2fd170d7df7eb83d3183adfc38fe1476d4685eecc6616c91a59c9f69af7fead"
          alt="나의 프로필 이미지"
        />
      </MyPagePofileBox>
      <ProfileUserInfo>
        <UserName>이름</UserName>
        <div>
          <UserCreated> 가입일</UserCreated>
          <UserId>유저 아이디</UserId>
        </div>
      </ProfileUserInfo>
    </ProfileImageLayout>
  );
}

export default ProfileImage;

const ProfileImageLayout = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  padding: 10px;
  margin: 10px;
`;

const MyPagePofileBox = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 100%;
  overflow: hidden;
  margin: 10px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ProfileUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  & div {
    display: flex;
  }
`;
const UserName = styled.h1`
  font-size: 20px;
`;

const UserCreated = styled.p`
  margin-right: 10px;
  font-size: 12px;
`;
const UserId = styled.p`
  font-size: 12px;
`;
