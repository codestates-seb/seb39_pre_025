import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

function EditQuestionForm() {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const body = {
      boardId: params.boardId,
    };
    axios
      .get(
        `http://ec2-52-71-227-130.compute-1.amazonaws.com:8080/questions/${params.boardId}`,
        body,
      )
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const onChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // axio put 만들어야함

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`/questions/${params.boardId}`, data)
      .then((res) => {
        console.log(res.data);
        navigate('/questions');
      })
      .catch((err) => console.log(`${err}`));
  };

  return (
    <EditQuestionFormLayout>
      <h2> Edit Your Question</h2>
      <EditQuestionBox>
        <form
          action=""
          onChange={onChange}
          onSubmit={onSubmit}
          id="edit-question-form"
        >
          <div>
            <label htmlFor="title">
              Title
              <input
                type="title"
                id="title"
                name="title"
                defaultValue={data.title}
              />
            </label>
          </div>
          <div>
            <label htmlFor="content">
              Content
              <textarea
                type="text"
                id="content"
                name="content"
                defaultValue={data.content}
              />
            </label>
          </div>
          <input
            type="submit"
            id="title"
            value="등록"
            className="edit-question-button"
          />
        </form>
      </EditQuestionBox>
    </EditQuestionFormLayout>
  );
}
export default EditQuestionForm;

const EditQuestionFormLayout = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
`;
const EditQuestionBox = styled.div`
  width: 400px;
  height: 400px;
  background-color: #fff;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  border-radius: 20px;
  & input {
    margin-bottom: 1rem;
    width: 100%;
    height: 30px;
  }
  & textarea {
    width: 100%;
    height: 250px;
    overflow: scroll;
  }
  & .edit-question-button {
    margin: 5px;
    width: 80px;
    height: 30px;
    background-color: #eee;
    border-radius: 5px;
    color: #078aff;
    border: 1px solid #078aff;
    cursor: pointer;
    :hover {
      background-color: #078aff;
      transition: 0.5s;
      color: #fff;
    }
  }
`;
