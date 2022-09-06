import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function DeleteQuestion() {
  const navigate = useNavigate();
  const params = useParams();

  const handleDeleteBtn = async (e) => {
    e.preventDefault();
    const body = {
      boardId: params.boardId,
    };

    const res = await axios.delete(
      `http://ec2-52-71-227-130.compute-1.amazonaws.com:8080/questions/${params.boardId}`,
      body,
    );
    if (res.status !== 200) return alert('삭제 요청 실패!');

    return navigate('/questions');
  };

  return (
    <ButtonLayout>
      <h2>Are you sure want to delete your question?</h2>
      <div>
        <Button id="login" onClick={handleDeleteBtn}>
          Delete
        </Button>
        <Button id="signup" onClick={() => navigate('/questions')}>
          Cancel
        </Button>
      </div>
    </ButtonLayout>
  );
}

export default DeleteQuestion;

const ButtonLayout = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 80px;
  height: 40px;
  margin: 0 5px;
  border: 0.1px solid #54a0ff;
  border-radius: 5px;
  transition: all 0.9s;

  &#login {
  }
  &#login:hover {
    box-shadow: 200px 0 0 0 rgba(0, 0, 0, 0.1) inset;
  }

  &#signup {
    background-color: #54a0ff;
    color: #fff;
  }
  &#signup:hover {
    box-shadow: 200px 0 0 0 rgba(0, 0, 0, 0.2) inset;
  }
`;
