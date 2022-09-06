// Questions: 전체 질문글 열람 페이지
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
// import Lists from './Lists';
import moment from 'moment';
import AsideMenubar from '../MyPage/AsideMenubar';
import 'moment/locale/ko';

function Questions() {
  const navigate = useNavigate();
  const [questionsList, setQuestionsList] = useState([]);

  const fetchData = async () => {
    axios.defaults.withCredentials = true;
    const response = await axios.get(
      `${process.env.REACT_APP_API_URI}/questions`,
    );
    console.log(response.data.content);
    setQuestionsList(response.data.content);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addQuestion = () => {
    navigate('/add-question');
  };

  const SetTime = (a, b) => {
    if (a !== b) {
      return moment(b).format('YYYY년 MMMM Do, hh:mm');
    }
    return moment(a).format('YYYY년 MMMM Do, hh:mm');
  };

  return (
    <QuestionsLayout>
      <QuestionsAside />
      <ContentBox>
        <div className="add-question-btn-section">
          <span>All Questions</span>
          <button type="button" onClick={addQuestion}>
            Add Question
          </button>
        </div>
        <QuestionList>
          {questionsList?.map((question, idx) => {
            return (
              <ListItem key={Math.random()} value={idx}>
                <UserIDBox>
                  <div className="author">userID{question.id} </div>
                </UserIDBox>
                <QuestionListBox>
                  <Link to={`/questions/${question.id}`}>
                    <TitleBox>
                      <h3 className="title">{question.title}</h3>
                    </TitleBox>
                    <ContentBox>
                      <pre>{question.content}</pre>
                    </ContentBox>
                    <PostedInfoBox>
                      <span className="date">
                        {SetTime(question.regdate, question.updatedate)}
                      </span>
                    </PostedInfoBox>
                  </Link>
                </QuestionListBox>
              </ListItem>
            );
          })}
        </QuestionList>
      </ContentBox>
    </QuestionsLayout>
  );
}

export default Questions;

const QuestionsLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  .add-question-btn-section {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    padding: 10px;
    box-sizing: border-box;
    justify-content: space-between;
    margin-bottom: 3rem;

    span {
      font-size: 2rem;
      margin-top: 1rem;
    }
  }
`;

const TitleBox = styled.div`
  cursor: pointer;
  font-size: 0.9rem;
  color: #54a0ff;
`;

const ContentBox = styled.div`
  width: 100%;
  max-width: 900px;
  overflow: auto;
  flex-direction: column;

  & button {
    width: 80px;
    height: 40px;
    margin: 0 5px;
    border: 0.1px solid #54a0ff;
    border-radius: 5px;
    transition: all 0.9s;
    background-color: #54a0ff;
    color: #fff;
    cursor: pointer;
    :hover {
      box-shadow: 200px 0 0 0 rgba(0, 0, 0, 0.2) inset;
    }
  }
`;

const QuestionsAside = styled(AsideMenubar)``;

const QuestionList = styled.section``;

const ListItem = styled.div`
  border-top: 1.5px solid #eee;
  border-bottom: 1.5px solid #eee;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;

  /* margin-bottom: 30px; */
  a {
    text-decoration: none;
    color: #000;
  }
`;
const QuestionListBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const UserIDBox = styled.div`
  padding: 2rem;
  font-size: 1rem;
`;
const PostedInfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  .date {
    color: gray;
    font-size: 13px;
  }
`;
