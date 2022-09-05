import React from 'react';
import styled from 'styled-components';
import EditQuestionForm from './EditQuestionForm';

function EditQuestionPage({ questionIdx }) {
  return (
    <EditQuestionPageLayout>
      <EditQuestionForm questionIdx={questionIdx} />
    </EditQuestionPageLayout>
  );
}

export default EditQuestionPage;

const EditQuestionPageLayout = styled.div`
  margin-top: 100px;
  width: 1200px;
  height: 100%;
  display: flex;
`;
