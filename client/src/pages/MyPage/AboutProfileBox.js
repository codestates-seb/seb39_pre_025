import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// 저장된 회원 자기소개 나타내는 박스 입니다

function AboutProfileBox() {
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

  return (
    <AboutProfileBoxLayout>
      <ProfileEditButton type="submit" onClick={profileEditHandler}>
        edit button
      </ProfileEditButton>

      <ProfileBox>
        {myProfileList?.map((profile) => {
          return (
            <div>
              <ProfileTitle>{profile.title}</ProfileTitle>
              <ProfileContent>{profile.content}</ProfileContent>
            </div>
          );
        })}
        {/* 작성된것이 없으면 아래 내용으로 조건부 렌더링 되도록 */}
        <div>
          <ProfileTitle>자기소개를 작성 하세요</ProfileTitle>
          <ProfileContent>
            상단 Edit button 을 눌러 개성있는 나의 소개글을 작성 해 보세요
          </ProfileContent>
        </div>
      </ProfileBox>
    </AboutProfileBoxLayout>
  );
}

export default AboutProfileBox;
const AboutProfileBoxLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  align-items: flex-end;
`;
const ProfileBox = styled.div`
  width: 600px;
  height: 500px;
  box-sizing: border-box;
  padding: 1rem;
`;
const ProfileTitle = styled.h2`
  text-align: center;
`;

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
