import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Question() {
  const [data, setData] = useState({});
  const params = useParams();
  useEffect(() => {
    const body = {
      boardId: params.boardId,
    };
    axios
      .get(
        `http://ec2-52-71-227-130.compute-1.amazonaws.com:8080/questions/${params.boardId}`,
        body,
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }, []);

  // * 게시글 수정

  // * 게시글 삭제

  return (
    <div>
      <Link to={`/edit-question/${params.boardId}`}>
        <button type="submit">Edit</button>
      </Link>
      <Link to={`/delete-question/${params.boardId}`}>
        <button type="submit">Delete</button>
      </Link>

      <div>{data.title}</div>
      <div>{data.content}</div>
      <div>{data.writer}</div>
    </div>
  );
}

export default Question;
