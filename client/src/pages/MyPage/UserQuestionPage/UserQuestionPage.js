import React from 'react';
import styled from 'styled-components';
import AsideMenubar from '../AsideMenubar';
import UserQuestionList from './UserQuestionBox';

function UserQuestionPage() {
  return (
    <UserQuestionPageLayout>
      <AsideMenubar />
      <UserQuestionList />
    </UserQuestionPageLayout>
  );
}

export default UserQuestionPage;

const UserQuestionPageLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;
