import React, { useState } from 'react';

const inputStyle = {
  width: '330px',
  height: '20px',
  backgroundColor: '#252525',
  padding: '5px',
  fontSize: '16px',
  marginBottom: '10px',
  color: 'white', // Adicionado para tornar o texto visível
  borderRadius: '10px',
};

const InputSearch = ({ placeholder, value, onChange, handleKeyPress }) => (
  <div>
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyPress={handleKeyPress}
      style={inputStyle}
      required
    />
  </div>
);

export default InputSearch;