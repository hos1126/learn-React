import React, { useReducer } from "react";

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch1] = useReducer(reducer, { value: 0 });
  console.log(state);
  console.log(dispatch1);
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch1({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch1({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
