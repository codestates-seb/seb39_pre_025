import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Navbar from './components/Navbar';
import AddQuestion from './pages/Questions/AddQuestion';
import EditQuestion from './pages/MyPage/EditQuestion';
import DeleteQuestion from './pages/MyPage/DeleteQuestion';
import MyPage from './pages/MyPage/MyPage';
import Footer from './components/Footer';
import { BackgroundLayout, GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <BackgroundLayout>
      <GlobalStyle />
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/add-question" element={<AddQuestion />} />
        <Route path="/edit-question" element={<EditQuestion />} />
        <Route path="/delete-question" element={<DeleteQuestion />} />
      </Routes>
      <Footer />
    </BackgroundLayout>
  );
}

export default App;
