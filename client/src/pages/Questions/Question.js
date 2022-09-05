import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import EditQuestionPage from '../MyPage/UserQuestionPage/EditQuestionPage';

function Question() {
  const [isOpen, setIsOpen] = useState();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const params = useParams();
  useEffect(() => {
    const body = {
      questionIdx: params.questionIdx,
    };
    axios
      .post(`/questions/${questionIdx}`, body)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }, []);

  // * 게시글 수정
  const handleEditBtn = () => {
    setIsOpen(!isOpen);
  };
  // * 게시글 삭제

  const handleDeleteBtn = (e) => {
    e.preventDefault();
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      axios.delete(`/questions/${questionIdx}`, data);
    }
    return navigate('/questions');
  };
  return (
    <div>
      {isOpen ? (
        <EditQuestionPage questionIdx={questionIdx} />
      ) : (
        <button type="button" onClick={handleEditBtn}>
          Edit
        </button>
      )}
      <button type="button" onClick={handleDeleteBtn}>
        Delete
      </button>
      <div>{data.title}</div>
      <div>{data.content}</div>
      <div>{data.writer}</div>
    </div>
  );
}

export default Question;
