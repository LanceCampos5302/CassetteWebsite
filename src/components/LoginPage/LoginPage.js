import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory to handle navigation
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Login successful, redirect to the Home page
        console.log('Login successful!', userCredential.user);
        navigate('/Home');
      })
      .catch((error) => {
        // Handle login errors
        console.error('Login error:', error.message);
        // You can show an error message to the user here if needed
      });
  };

  return (
    <div className='LoginBackground'>
      <div className='LoginBox'>
        <div className='LoginPageTitle'>Login</div>
        <div className='LoginBoxContent'>
          <div className='LoginPageInputs'>
            <div className='LoginPageInputTitle'>Email Address</div>
            <input
              className='LoginPageInput'
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
            />
            <div className='LoginPageInputTitle'>Password</div>
            <input
              className='LoginPageInput'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
            />
            <div className='LoginPageInput'>
              <input
                className='RememberCheck'
                style={{ marginRight: '0.35vw' }}
                type='checkbox'
                id='RememberCheckbox'
                name='RememberCheckbox'
                value='checkboxValue'
              />
              <label htmlFor='RememberCheckbox'>Remember Me</label>
            </div>
          </div>
          <button
            className='LoginButton LoginPageInput'
            onClick={handleLogin}
          >
            Login
          </button>
          <a className='LoginPageLink' style={{ marginBottom: '1vh' }} href='/ForgotPassword'>
            Forgot Password
          </a>
          <a className='LoginPageLink' href='/Register'>
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
