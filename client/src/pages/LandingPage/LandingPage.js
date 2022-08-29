import React from 'react';
import Logout from '../../components/Logout';
import Questions from '../Questions/Questions';

function LandingPage() {
  return (
    <div>
      <Logout />

      <Questions />
    </div>
  );
}

export default LandingPage;
