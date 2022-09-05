import React from 'react';
import styled from 'styled-components';

function DeleteProfile() {
  return (
    <DeleteProfileLayout>
      <p>정말로 계정을 삭제 하실 건가요?</p>
      <button type="submit" id="yes">
        Yes
      </button>
      <button type="submit" id="no">
        No
      </button>
    </DeleteProfileLayout>
  );
}

export default DeleteProfile;

const DeleteProfileLayout = styled.div`
  width: 50%;
  height: 200px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: -2px 8px 10px rgba(0, 0, 0, 0.15);
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  color: #555;
  p {
    margin-top: 50px;
  }
  button {
    cursor: pointer;
    width: 80px;
    height: 40px;
    margin: 0 5px;
    border: 0.1px solid #54a0ff;
    border-radius: 5px;
    transition: all 0.9s;

    &#yes {
    }
    &#yes:hover {
      box-shadow: 200px 0 0 0 rgba(0, 0, 0, 0.1) inset;
    }

    &#no {
      background-color: #54a0ff;
      color: #fff;
    }
    &#no:hover {
      box-shadow: 200px 0 0 0 rgba(0, 0, 0, 0.2) inset;
    }
  }
`;
