import React from 'react';
import ScrollBox from './ScrollBox';

const App = () => {
  return (
    <div>
      <ScrollBox ref={ref => (this.scrollBox = ref)}></ScrollBox>
      <button onClick={() => this.scrollBox.scrollToBottom()}>맽밑으로</button>
    </div>
  );
};

export default App;
