// Questions: 전체 질문글 열람 페이지
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Question from './Question';
import AsideMenubar from '../MyPage/AsideMenubar';

function Questions() {
  const navigate = useNavigate();
  const [questionsList, setQuestionsList] = useState([]);

  const fetchData = async () => {
    axios.defaults.withCredentials = true;
    const response = await axios.get('/questions');
    console.log(response.data);
    setQuestionsList(response.data.questions);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addQuestion = () => {
    navigate('/add-question');
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
          {questionsList?.map((question) => {
            return (
              <Question
                key={Math.random()}
                title={question.title}
                content={question.content}
                writer={question.writer}
              />
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
  height: 90vh;

  .add-question-btn-section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    span {
      font-size: 30px;
    }
  }
`;

const ContentBox = styled.div`
  padding: 10px;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionsAside = styled(AsideMenubar)``;

const QuestionList = styled.section``;
