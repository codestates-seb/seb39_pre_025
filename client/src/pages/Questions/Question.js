import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import AsideMenubar from '../MyPage/AsideMenubar';

function Question() {
  const [data, setData] = useState({});
  const params = useParams();
  useEffect(() => {
    const body = {
      boardId: params.boardId,
    };
    axios
      .get(`${process.env.REACT_APP_API_URI}/questions/${params.boardId}`, body)
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
    <QuestionLayout>
      <AsideMenubar />
      <QuestionBox>
        <QuestionTitleBox>
          {data.title}
          <QuestionButtonsBox>
            <Link to={`/edit-question/${params.boardId}`}>
              <button type="submit" id="edit">
                Edit
              </button>
            </Link>
            <Link to={`/delete-question/${params.boardId}`}>
              <button type="submit" id="delete">
                Delete
              </button>
            </Link>
          </QuestionButtonsBox>
        </QuestionTitleBox>
        <QuestionContentBox>
          <div>{data.content}</div>
          <div>{data.writer}</div>
        </QuestionContentBox>
      </QuestionBox>
    </QuestionLayout>
  );
}

export default Question;

const QuestionLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
const QuestionBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const QuestionButtonsBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 5rem;
  button {
    width: 80px;
    height: 40px;
    margin: 0 2px;
    border: 0.1px solid #54a0ff;
    border-radius: 5px;
    transition: all 0.9s;

    &#edit {
      background-color: #54a0ff;
      color: #fff;
    }
    &#eidt:hover {
      box-shadow: 200px 0 0 0 rgba(0, 0, 0, 0.1) inset;
    }

    &#delete {
      background-color: #54a0ff;
      color: #fff;
    }
    &#delete:hover {
      box-shadow: 200px 0 0 0 rgba(0, 0, 0, 0.2) inset;
    }
  }
`;

const QuestionTitleBox = styled.div`
  border-bottom: 1px solid #ddd;
  width: 100%;
  padding: 1.5rem;
  font-size: 1.8rem;
`;

const QuestionContentBox = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 2rem;
`;
