import React, { useState } from 'react';
import { axiosWithAuth } from '../axiosWithAuth'

const AddFriend = ({friends, setFriends}) => {
  const [friend, setFriend] = useState({});

  const handleChange = e => {
    setFriend({ ...friend, [e.target.name]: e.target.value });
    console.log(friend);
  };
  const addFriend = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('http://localhost:5000/api/friends', friend)
      .then(res => {
        console.log(res);
        setFriends([...friends, friend])
        console.log(friends);
        setFriend({...friend, name: '', age: '', email: ''})
      })
      .catch(err => console.log(err))
  };

  return (
    <form onSubmit={addFriend}>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="Name"
      />
      <input type="text" name="age" onChange={handleChange} placeholder="Age" />
      <input
        type="email"
        name="email"
        onChange={handleChange}
        placeholder="Email"
      />
      <button>Submit</button>
    </form>
  );
};

export default AddFriend;
