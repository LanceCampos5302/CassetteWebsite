import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './RegisterPage.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameAvailable, setUsernameAvailable] = useState(true);

  const usersCollection = firebase.firestore().collection('users');

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);

    usersCollection
      .where('username', '==', newUsername)
      .get()
      .then((querySnapshot) => {
        setUsernameAvailable(querySnapshot.empty);
      })
      .catch((error) => {
        console.error('Error checking username availability:', error);
      });
  };

  const handleRegister = () => {
    if (!usernameAvailable) {
      alert('Please choose a different username. The chosen username is already taken.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const userUid = userCredential.user.uid;

        // Store User Data in Firestore
        usersCollection
          .doc(userUid)
          .set({
            username: username,
            email: email,
            DateCreated: firebase.firestore.FieldValue.serverTimestamp(),
            // Other user data fields as needed
          })
          .then(() => {
            navigate('/Login');
          })
          .catch((error) => {
            console.error('Error storing user data:', error);
          });
      })
      .catch((error) => {
        console.error('Registration error:', error.message);
      });
  };

  return (
    <div className='RegisterBackground'>
      <div className={`RegisterBox ${!usernameAvailable ? 'RegisterBoxIncrease' : ''}`}>
        <div className='RegisterPageTitle'>Register</div>
        <div className='RegisterBoxContent'>
          <div className='RegisterPageInputs'>
            <div className='RegisterPageInputTitle'>Username</div>
            <input
              className='RegisterPageInput'
              type='text'
              value={username}
              onChange={(e) => handleUsernameChange(e.target.value)}
              placeholder='Username'
            />
            {!usernameAvailable && (
              <p className='InputErrorMessage'>Username is Unavailable</p>
            )}
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
            disabled={!usernameAvailable}
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
