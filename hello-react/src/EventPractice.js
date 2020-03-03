import React, { useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({
    username: '',
    message: ''
  });
  const { username, message } = form;

  const onChange = e => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(nextForm);

    console.log(nextForm);
  };
  const onClick = e => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: ''
    });
  };

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      ></input>

      <input
        type="text"
        name="message"
        placeholder="메시지"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></input>

      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
