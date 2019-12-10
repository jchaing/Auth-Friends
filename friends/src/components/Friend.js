import React from 'react';

const Friend = ({ name, age, email }) => {
  return (
    <div>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Email: {email}</div>
    </div>
  );
};

export default Friend;
