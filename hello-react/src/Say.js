import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState();
  const onClickEnter = () => setMessage('안녕!');
  const onClickLeave = () => setMessage('안녕ㅇ히가라');

  const [color, setColor] = useState('black');

  return (
    <div>
      <button style={{ color: 'red' }} onClick={onClickEnter}>
        입장
      </button>
      <button style={{ color: 'blue' }} onClick={onClickLeave}>
        퇴장
      </button>
      <h1 style={{ color }}>{message}</h1>
      <button onClick={() => setColor('red')}>빨</button>
      <button onClick={() => setColor('blue')}>파</button>
      <button onClick={() => setColor('green')}>초</button>
    </div>
  );
};

export default Say;
