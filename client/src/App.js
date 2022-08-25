import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  const onClick = async e => {
    e.preventDefault();
    await axios
      .get('http://localhost:8080/api/test')
      .then(res => {
        setData(res.data);
      })

      .catch(err => console.log(`${err}`));
  };

  return (
    <div
      style={{
        marginTop: '30%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: 200,
          height: 80,
          backgroundColor: '#078AFF',
          borderRadius: '10px',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'center',
        }}
      >
        버튼입니다
      </button>

      <div
        style={{
          margin: 10,
          border: '1px solid #000',
          borderRadius: '10px',
          width: 400,
          height: 200,
        }}
      >
        {data ? data : null}
      </div>
    </div>
  );
};

export default App;
