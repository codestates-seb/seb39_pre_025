// Question.js : 단건 게시글 컴포넌트
import React from 'react';
import styled from 'styled-components';

function Question({ title, content, writer }) {
  return (
    <QuestionLayout>
      <Title>
        <h3>{title}</h3>
      </Title>
      <Content>{content}</Content>
      <Writer>{writer}</Writer>
    </QuestionLayout>
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
