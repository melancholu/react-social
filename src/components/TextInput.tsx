import React, { useState } from 'react';
import styles from '../styles/TextInput.module.scss';

interface TextInputProps {
  name: string;
  placeholder: string;
  _onChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  placeholder,
  _onChange,
}) => {
  const [customValue, setCustomValue] = useState('');

  const handleChange = (event: any) => {
    _onChange(event.target.value);
    setCustomValue(event.target.value);
  };

  return (
    <input
      type="text"
      className={styles.input}
      name={name}
      placeholder={placeholder}
      value={customValue}
      onChange={handleChange}
    />
  );
};

export default TextInput;
