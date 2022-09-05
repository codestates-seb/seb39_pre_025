import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/ko';

function UserQuestions() {
  const [questionsList, setQuestionsList] = useState([]);

  const fetchData = async () => {
    axios.defaults.withCredentials = true;
    const response = await axios.get('/questions');
    console.log(response.data);

    setQuestionsList(
      response.data.questions.filter(
        (el) => el.writer === localStorage.username,
      ),
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const SetTime = (a, b) => {
    if (a !== b) {
      return moment(b).format('YYYY년 MMMM Do, hh:mm');
    }
    return moment(a).format('YYYY년 MMMM Do, hh:mm');
  };

  return (
    <UserQuestionsLayout>
      <UserQuestionsButton>
        <button type="submit">edit button</button>
        <button type="button"> delete </button>
      </UserQuestionsButton>

      <ProfileBox>
        {questionsList?.map((question, idx) => {
          return (
            <ListItem key={Math.random()} value={idx}>
              <Link to={`/questions/${question.questionIdx}`}>
                <TitleBox>
                  <h3 className="title">{question.title}</h3>
                </TitleBox>
                <ContentBox>
                  <pre>{question.content}</pre>
                </ContentBox>
                <PostedInfoBox>
                  <div className="author">{question.writer}</div>
                  <div className="date">
                    {SetTime(question.regdate, question.updatedate)}
                  </div>
                </PostedInfoBox>
              </Link>
            </ListItem>
          );
        })}
      </ProfileBox>
    </UserQuestionsLayout>
  );
}

export default UserQuestions;

const UserQuestionsLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  align-items: flex-end;
  & button {
    margin: 5px;
    width: 80px;
    height: 30px;
    background-color: #eee;
    border-radius: 5px;
    color: #078aff;
    border: 1px solid #078aff;
    cursor: pointer;
  }
  & button:hover {
    background-color: #078aff;
    color: #fff;
  }
`;
const UserQuestionsButton = styled.div``;

const ProfileBox = styled.div`
  margin-left: 3rem;
  width: 600px;
  height: 450px;
  border-radius: 20px;
  box-shadow: 7px 8px 30px rgba(0, 0, 0, 0.2);
  overflow: scroll;
  /* border-radius: 10px; */
  box-sizing: border-box;
  padding: 1rem;
`;
// const ProfileTitle = styled.h2`
//   text-align: left;
// `;

// const ProfileContent = styled.div`
//   box-sizing: border-box;
//   display: flex;
// `;
const ListItem = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 80vw;
  margin-bottom: 30px;

  a {
    text-decoration: none;
    color: #000000;
  }
`;

const TitleBox = styled.div`
  cursor: pointer;
  color: blueviolet;
`;

const ContentBox = styled.div`
  padding: 10px;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostedInfoBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  line-height: 1;

  .author {
    margin-right: 10px;
    font-weight: bold;
  }
  .date {
    color: gray;
    font-size: 13px;
  }
`;
