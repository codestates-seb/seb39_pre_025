import React from 'react';
import { useNavigate } from 'react-router-dom';

function MyPage() {
  const navigate = useNavigate();

  const editQuestion = () => {
    navigate('/edit-question');
  };
  const deleteQuestion = () => {
    navigate('/delete-question');
  };

  return (
    <div>
      <button type="button" onClick={editQuestion}>
        Edit Question
      </button>
      <button type="button" onClick={deleteQuestion}>
        Delete Question
      </button>
    </div>
  );
}

export default MyPage;
