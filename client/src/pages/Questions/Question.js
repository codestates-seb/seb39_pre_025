import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Question() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const params = useParams();
  useEffect(() => {
    const body = {
      boardId: params.boardId,
    };
    axios
      .get(`/questions/${params.boardId}`, body)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }, []);

  // * 게시글 수정

  // * 게시글 삭제

  const handleDeleteBtn = (e) => {
    e.preventDefault();
    const body = {
      boardId: params.boardId,
    };
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      axios.delete(`/questions/${params.boardId}`, body).then((res) => {
        console.log(res.data);
      });
    }
    return navigate('/questions');
  };
  return (
    <div>
      <Link to={`/edit-question/${params.boardId}`}>
        <button type="submit">Edit</button>
      </Link>
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
