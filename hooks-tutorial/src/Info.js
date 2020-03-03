import React, { useReducer } from "react";

function reducer(state, action) {
  console.log(state);
  return {
    ...state,
    [action.name]: action.value
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: ""
  });
  const { name, nickname } = state;

  const onchange = e => {
    console.log(e.target);
    dispatch(e.target);
  };
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onchange}></input>
        <input name="nickname" value={nickname} onChange={onchange}></input>
      </div>
      <div>
        <div>
          <b>이름 : </b>
          {name}
        </div>
        <div>
          <b>닉네임 : </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
