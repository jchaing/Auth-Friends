import React, { useState } from 'react';
import axios from 'axios';

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    console.log(credentials)
  };

  const login = e => {
    e.preventDefault();
    console.log(props);
    axios
      .post('http://localhost:5000/api/login', credentials)
      .then(res => {
        console.log('Login.js login: res', res);
        localStorage.setItem('token', res.data.payload);
        props.history.push('/protected');
      })
      .catch(err => console.log('Login.js error: ', err));
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
