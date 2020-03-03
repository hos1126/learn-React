import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      <h1>안ㄴ녕하세요, 제 이름은 {name}입니다.</h1>
      <h2>칠드런 은 {children}</h2>
      <h3>숫자{favoriteNumber}</h3>
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본이름'
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;
