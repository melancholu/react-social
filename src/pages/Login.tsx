import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import ActionButton from '../components/ActionButton';
import TextInput from '../components/TextInput';
import styles from '../styles/Login.module.scss';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoggedIn, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/feed');
    }
  }, [isLoggedIn]);

  return (
    <div className={styles.container}>
      <div className={styles.inputs}>
        <h1 className={styles.title}>Socials</h1>
        <TextInput
          name="email"
          placeholder="email"
          _onChange={(value) => setEmail(value)}
        />
        <TextInput
          name="password"
          placeholder="password"
          _onChange={(value) => setPassword(value)}
        />
        <ActionButton onClick={() => login(email, password)} text="Login" />
      </div>
    </div>
  );
};

export default LoginPage;
