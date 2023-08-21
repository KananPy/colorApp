

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColor } from '../../redux/colors';
import './ColorForm.module.css'

const ColorForm = () => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addColor(name, code));
    setName('');
    setCode('');
  };

  return (
    <form className='formInput' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Color Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Color Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">Add Color</button>
    </form>
  );
};

export default ColorForm;
