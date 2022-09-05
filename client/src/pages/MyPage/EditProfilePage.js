import React from 'react';
import styled from 'styled-components';
import EditProfileForm from './EditProfileForm';
import ProfileButton from './ProfileButton';
import ProfileImage from './ProfileImage';
import AsideMenubar from './AsideMenubar';

function EditProfilePage() {
  return (
    <EditProfileLayout>
      <div style={{ height: '100%' }}>
        <AsideMenubar />
      </div>
      <EditProfileBox>
        <ProfileImgandInfo>
          <ProfileImage />
          <ProfileButton />
        </ProfileImgandInfo>
        <div>
          <EditProfileForm />
        </div>
      </EditProfileBox>
    </EditProfileLayout>
  );
}

export default EditProfilePage;

const EditProfileLayout = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const EditProfileBox = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ProfileImgandInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin-bottom: 400px;
`;
