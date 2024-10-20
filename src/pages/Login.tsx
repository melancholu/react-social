import React, { useState } from 'react';

import useAuth from '../hooks/useAuth';

import ActionButton from '../components/ActionButton';
import TextInput from '../components/TextInput';
import styles from '../styles/Login.module.scss';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  return (
    <div className={styles.container}>
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
  );
};

export default LoginPage;
