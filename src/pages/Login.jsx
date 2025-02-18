import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const auth = getAuth(app);

  const getFriendlyError = (firebaseError) => {
    const errors = {
      'auth/invalid-credential': 'Invalid email or password',
      'auth/user-not-found': 'Account not found',
      'auth/wrong-password': 'Incorrect password',
      'auth/too-many-requests': 'Too many attempts. Try again later'
    };
    return errors[firebaseError] || 'Something went wrong. Please try again.';
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      const errorCode = err.code.split('/')[1];
      setError(getFriendlyError(err.code));
      setTimeout(() => setError(''), 5000);
    }
  };
  const styles = `
    .error-popup {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #ffebee;
      color: #c62828;
      padding: 12px 24px;
      border-radius: 4px;
      font-family: 'Helvetica', cursive;
      font-style: italic;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      animation: shake 0.4s ease-in-out;
    }

    @keyframes shake {
      0% { transform: translateX(-50%); }
      25% { transform: translateX(calc(-50% + 4px)); }
      50% { transform: translateX(calc(-50% - 4px)); }
      75% { transform: translateX(calc(-50% + 2px)); }
      100% { transform: translateX(-50%); }
    }
  `;

  return (
    <div className='form-container'>
      <style>{styles}</style>
      <div className='form-wrapper'>
        <span className='logo'>Aayush Verma</span>
        <span className='title'>Login</span>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign in</button>
        </form>
        {error && <div className='error-popup'>{error}</div>}
        <p onClick={() => navigate('/signup')}>
          Don't have an account? <span className='link'>Register now</span>
        </p>
      </div>
    </div>
  );
};

export default Login;