import React from 'react';
import styled from 'styled-components';
import TypeIt from 'typeit-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow } from '@fortawesome/fontawesome-free-brands';

function Main() {
  return (
    <MainLayout>
      <MainBox>
        <FlexBox>
          <div className="main-left-box">
            <h5>
              Find the best answer to your technical question, help others
              answer theirs
            </h5>
            <button type="submit" className="main-left-botton">
              Join the community
            </button>
            <p>or search content</p>
          </div>
          <div className="main-right-box">
            <h5>Want a secure, private spave for yout technical knowledge?</h5>
            <p>get started</p>
            <button type="submit" className="main-right-button">
              For large organizations
            </button>
            <button type="submit" className="main-right-button-2">
              For small teams
            </button>
          </div>
        </FlexBox>

        <MainTextBox>
          Every &nbsp;
          <span style={{ color: '#f27622' }}>
            <TypeIt
              options={{
                speed: 200,
                cursorChar: '',
                loop: 'true',
              }}
            >
              developer
            </TypeIt>
          </span>
          &nbsp; has a
          <br /> tab open to Stack Overflow
        </MainTextBox>

        <MainListUlBox>
          <li>
            <span>100+ million </span>
            <br />
            monthly visitors to Stack Overflow & Stack Exchange
          </li>
          <li>
            <span>45.1+ billion </span> <br />
            Times a developer got help since 2008
          </li>
          <li>
            <span> 179% ROI </span> <br />
            from companies using Stack Overflow for Teams
          </li>
          <li>
            <span> 5,000+ </span> <br /> Stack Overflow for Teams instances
            active every day
          </li>
        </MainListUlBox>
      </MainBox>
      <MainSecondSection>
        <MainBoardOne>
          <p>
            <FontAwesomeIcon icon={faStackOverflow} size="2x" />
            stack <b>overflow</b>
          </p>
          <img
            src="https://cdn.sstatic.net/Img/home/illo-public.svg?v=14bd5a506009"
            alt="community board "
          />
          <h5>
            A public platform building the definitive collection of coding
            questions & answers
          </h5>
          <p className="left-board-text">
            A community-based space to find and contribute answers to technical
            challenges, and one of the most popular websites in the world.
          </p>
          <button type="button"> Join the community</button>
        </MainBoardOne>
        <MainBoardTwo>
          <p>
            <FontAwesomeIcon icon={faStackOverflow} size="2x" />
            stack <b>overflow</b>
          </p>
          <img
            src="https://cdn.sstatic.net/Img/home/illo-teams.svg?v=7e543f14fcc0"
            alt=" for teams board "
          />
          <h5>
            A private collaboration & <br />
            knowledge sharing SaaS <br />
            platform for companies
          </h5>
          <p className="rigth-board-text">
            A web-based platform to increase productivity, decrease cycle times,
            accelerate time to market, and protect institutional knowledge.
          </p>
          <button type="button"> For large organizations</button>
          <button type="button"> For small teams</button>
        </MainBoardTwo>
      </MainSecondSection>
    </MainLayout>
  );
}

export default Main;

const MainLayout = styled.div`
  overflow: hidden;
  width: 100vw;
  background-color: #eee;
`;
const MainBox = styled.div`
  width: 95%;
  padding: 2rem;
  box-sizing: border-box;
  background-color: #353a3e;
  margin: 0 auto;
  margin-top: 20rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  .main-left-box {
    padding: 1rem;
    width: 300px;
    height: 150px;
    border-radius: 5px;
    background-color: #fee3cd;
    margin-right: 1rem;
    font-weight: 100;
    font-size: 15px;
    color: #333;
    button {
      background-color: #f27622;
      padding: 10px;
      border: none;
      border-radius: 5px;
      color: #fff;
      cursor: pointer;
    }
    p {
      font-size: 11px;
    }
  }
  .main-right-box {
    padding: 1rem;
    width: 300px;
    height: 150px;
    color: #333;
    font-weight: 100;
    font-size: 15px;
    border-radius: 5px;
    background-color: #cde9fe;
    button {
      background-color: #54a0ff;
      margin-right: 5px;
      padding: 10px;
      border: none;
      border-radius: 5px;
      color: #fff;
      cursor: pointer;
    }
    p {
      font-size: 11px;
    }
    span {
      font-weight: 100;
    }
  }
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: center;
`;
const MainTextBox = styled.div`
  margin-top: 3rem;
  color: #fff;
  font-size: 2rem;

  &TypeIt {
    color: #f27622;
  }
`;

const MainListUlBox = styled.div`
  margin-top: 5rem;
  list-style: none;
  display: flex;
  font-size: 11px;
  justify-content: center;
  color: #fff;
  & li {
    width: 150px;
    height: 100px;

    line-height: 20px;
  }
  & span {
    font-size: 15px;
  }
`;
// 아래쪽 보드
const MainSecondSection = styled.div`
  margin-top: -3rem;
  margin-bottom: 5rem;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

const MainBoardOne = styled.div`
  width: 350px;
  height: 600px;
  margin-right: 50px;
  text-align: center;
  padding: 1rem;
  border-radius: 10px;
  background: linear-gradient(to top, #fee3cd 60%, #fff);

  img {
    margin-top: 1rem;
    width: 350px;
    object-fit: cover;
  }
  h5 {
    margin-top: 2rem;
    font-size: 20px;
  }
  .left-board-text {
    color: #333;
  }
  button {
    margin-top: 1rem;
    width: 160px;
    background-color: #f27622;
    padding: 10px;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
  }
`;
const MainBoardTwo = styled.div`
  width: 350px;
  height: 600px;
  text-align: center;
  padding: 1rem;
  border-radius: 10px;
  background: linear-gradient(to top, #d4ecfe 50%, #fff);
  img {
    margin-top: 1rem;
    width: 350px;
    object-fit: cover;
  }
  h5 {
    margin-top: 2rem;
    font-size: 20px;
  }
  .rigth-board-text {
    color: #333;
  }
  button {
    margin-top: 1rem;
    margin-right: 5px;
    width: 160px;
    background-color: #54a0ff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
  }
`;
