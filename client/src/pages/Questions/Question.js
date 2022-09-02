// Question.js : 단건 게시글 컴포넌트
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Question() {
  const [question, setQuestion] = useState();
  const params = useParams();
  useEffect(() => {
    const body = {
      postNum: params.postNum,
    };
    axios.post('/questions/question', body).then((res) => {
      const questionOne = res.data.body;
      setQuestion(questionOne);
    });
  });
  return (
    <>
      {question.map((questionOne, idx) => {
        return (
          <QuestionLayout key={{ idx }}>
            <Title>
              <h3>{questionOne.title}</h3>
            </Title>
            <Content>{questionOne.content}</Content>
            <Writer>{questionOne.writer}</Writer>
          </QuestionLayout>
        );
      })}
    </>
  );
}

export default Question;

const QuestionLayout = styled.div`
  // 임시 스타일
  border: 1px solid black;
`;

const Title = styled.div``;
const Content = styled.pre``;
const Writer = styled.div``;
