import React, { useState } from 'react';

type JokesFormProps = {
  onSubmit: (count: number) => void;
};

const JokesForm: React.FC<JokesFormProps> = ({ onSubmit }) => {
  const [count, setCount] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (count >= 1 && count <= 100) {
      onSubmit(count);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Number of jokes:
        <input 
          type="number" 
          value={count} 
          onChange={(e) => setCount(Number(e.target.value))} 
          min="1" max="100"
        />
      </label>
      {' '}
      <button type="submit">Get Jokes</button>
    </form>
  );
};

export default JokesForm;
