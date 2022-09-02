import React from 'react';
import styled from 'styled-components';
import ProfileButton from '../ProfileButton';
import ProfileImage from '../ProfileImage';
import UserQuestions from './UserQuestions';

function UserQuestionList() {
  return (
    <UserQuestionListLayout>
      <div style={{ marginBottom: '400px' }}>
        <ProfileImage />
        <ProfileButton />
      </div>
      <div>
        <UserQuestions />
      </div>
    </UserQuestionListLayout>
  );
}

export default UserQuestionList;

const UserQuestionListLayout = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
