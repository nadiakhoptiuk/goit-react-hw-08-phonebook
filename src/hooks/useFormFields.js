import { useState } from 'react';

export default function useFormFields() {
  const [state, setState] = useState('');

  const handleChange = ({ target: { value } }) => {
    setState(value);
  };

  return { state, setState, handleChange };
}
