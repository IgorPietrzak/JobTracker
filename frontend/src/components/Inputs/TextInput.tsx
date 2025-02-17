import React from 'react';
import TextInputProps from '../../types.ts';
import styles from './TextInput.module.css';

export default function TextInput(props: TextInputProps) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        placeholder={props.text}
      />
    </div>
  );
}

