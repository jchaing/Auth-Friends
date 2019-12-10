import React from 'react';
import { axiosWithAuth } from '../axiosWithAuth'

const FriendsList = () => {

  const getData = () => {
    axiosWithAuth()
      .get('/data')
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err))
  }

  return (
    <h2>Friends List</h2>
  )
}

export default FriendsList;
