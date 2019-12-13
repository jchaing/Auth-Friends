import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../axiosWithAuth';
import Friend from './Friend';
import AddFriend from './AddFriend';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Friends List</h2>
      {friends.map(friend => ( 
        <Friend key={friend.id} id={friend.id} name={friend.name} age={friend.age} email={friend.email} />
      ))}
      <AddFriend friends={friends} setFriends={setFriends} />
    </div>
  );
};

export default FriendsList;
