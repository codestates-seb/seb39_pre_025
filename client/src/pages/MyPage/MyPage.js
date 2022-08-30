import React from 'react';

import styled from 'styled-components';
import AsideMenubar from './AsideMenubar';
import Profile from './Profile';

function MyPage() {
  return (
    <MyPageLayout>
      <div>
        <AsideMenubar />
      </div>
      <div>
        <Profile />
      </div>
    </MyPageLayout>
  );
}

export default MyPage;

const MyPageLayout = styled.div`
  border: 1px solid #000;
  width: 1200px;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
