// Questions: 전체 질문글 열람 페이지
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Question from './Question';

function Questions() {
  const navigate = useNavigate();
  const [questionsList, setQuestionsList] = useState(null);
  const fetchData = async () => {
    const response = await axios.get('/questions');
    setQuestionsList(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const addQuestion = () => {
    navigate('/add-question');
  };
  const editQuestion = () => {
    navigate('/edit-question');
  };
  const deleteQuestion = () => {
    navigate('/delete-question');
  };

  return (
    <div>
      <div>
        <button type="button" onClick={addQuestion}>
          Add Question
        </button>
        <button type="button" onClick={editQuestion}>
          Edit Question
        </button>
        <button type="button" onClick={deleteQuestion}>
          Delete Question
        </button>
      </div>
      {questionsList?.map((question) => {
        return <Question title={question.title} content={question.content} />;
      })}
    </div>
  );
}

export default Questions;
