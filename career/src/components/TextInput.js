// src/components/TextInput.js
import React from 'react';

function TextInput({ value, onChange, placeholder, type = 'text' }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="mb-4 p-2 border rounded w-full"
    />
  );
}

export default TextInput;
