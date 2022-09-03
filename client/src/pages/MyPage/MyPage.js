import React from 'react';
import styled from 'styled-components';
import AsideMenubar from './AsideMenubar';
import Profile from './Profile';
// 여기서 프로프필 소개 그리고 프로필 소개 수정 되는 프로필 최종 페이지 입니다

function MyPage() {
  return (
    <MyPageLayout>
      <div style={{ width: '180px', height: '100%' }}>
        <AsideMenubar />
      </div>

      <Profile />
    </MyPageLayout>
  );
}

export default MyPage;

const MyPageLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;
