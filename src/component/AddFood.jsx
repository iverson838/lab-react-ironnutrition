import React from 'react';
import { useState } from 'react';

const AddFood = (props) => {
  const [display, SetDisplay] = useState(false);
  const toggleForm = () => {
    SetDisplay(!display);
  };
  return <button onclick={toggleForm}>Add new Item</button>;
};

export default AddFood;
