import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function UserQuestions() {
  const [myProfileList, setMyProfileList] = useState(null);
  const navigate = useNavigate();

  const getProfile = async () => {
    const response = await axios.get('/questions');
    console.log(response.data);
    const questionList = response.data.questions;
    // const temp = request.data.questions.filter((el) => el.writer === userId);
    setMyProfileList([...questionList]);
  };
  const profileEditHandler = () => {
    navigate('/edit-question');
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <UserQuestionsLayout>
      <UserQuestionsButton>
        <button type="submit" onClick={profileEditHandler}>
          edit button
        </button>
        <button type="button"> delete </button>
      </UserQuestionsButton>

      <ProfileBox>
        {myProfileList !== undefined ? (
          myProfileList?.map((question, idx) => {
            return (
              <div key={Math.random()} idx={idx}>
                <ProfileTitle>
                  <Link to={`/post/${question.PostNum}`}>
                    <input type="checkbox" />
                    <span style={{ fontSize: '18px', color: 'skyBlue' }}>
                      {question.title}
                    </span>
                  </Link>
                  {/* :<span style={{ fontSize: '14px' }}> {profile.content} </span> */}
                </ProfileTitle>
              </div>
            );
          })
        ) : (
          <div>
            <ProfileTitle>자기소개를 작성 하세요</ProfileTitle>
            <ProfileContent>
              상단 Edit button 을 눌러 개성있는 나의 소개글을 작성 해 보세요
            </ProfileContent>
          </div>
        )}
      </ProfileBox>
    </UserQuestionsLayout>
  );
}

export default UserQuestions;

const UserQuestionsLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  align-items: flex-end;
  & button {
    margin: 5px;
    width: 80px;
    height: 30px;
    background-color: #eee;
    border-radius: 5px;
    color: #078aff;
    border: 1px solid #078aff;
    cursor: pointer;
  }
  & button:hover {
    background-color: #078aff;
    color: #fff;
  }
`;
const UserQuestionsButton = styled.div``;

const ProfileBox = styled.div`
  margin-left: 3rem;
  width: 600px;
  height: 450px;
  border-radius: 20px;
  box-shadow: 7px 8px 30px rgba(0, 0, 0, 0.2);
  overflow: scroll;
  /* border-radius: 10px; */
  box-sizing: border-box;
  padding: 1rem;
`;
const ProfileTitle = styled.h2`
  text-align: left;
`;

const ProfileContent = styled.div`
  box-sizing: border-box;
  display: flex;
`;
