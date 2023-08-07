import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './RegisterPage.css';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Registration successful
        const user = userCredential.user;
        console.log('Registration successful!', user);
      })
      .catch((error) => {
        // Handle registration errors
        console.error('Registration error:', error.message);
      });
  };

  return (
    <div className='RegisterBackground'>
      <div className='RegisterBox'>
        <div className='RegisterPageTitle'>Register</div>
        <div className='RegisterBoxContent'>
          <div className='RegisterPageInputs'>
            <div className='RegisterPageInputTitle'>Username</div>
            <input
              className='RegisterPageInput'
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Username'
            />
            <div className='RegisterPageInputTitle'>Email Address</div>
            <input
              className='RegisterPageInput'
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
            />
            <div className='RegisterPageInputTitle'>Password</div>
            <input
              className='RegisterPageInput'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
            />
            <div className='RegisterPageInputTitle'>Confirm Password</div>
            <input
              style={{ marginBottom: '2vh' }}
              className='RegisterPageInput'
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder='Confirm Password'
            />
          </div>
          <button
            className='RegisterButton RegisterPageInput'
            onClick={handleRegister}
          >
            Create Account
          </button>
          <a className='RegisterPageLink' href='/Login'>
            Already have an account?
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
