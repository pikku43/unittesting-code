import React from 'react';

type Joke = {
  id: number;
  question: string;
  answer: string;
};

type JokesListProps = {
  jokes: Joke[];
};

const JokesList: React.FC<JokesListProps> = ({ jokes }) => {
  return (
    <div>
      {jokes.length > 0 ? (
        <ul>
          {jokes.map(joke => (
            <li key={joke.id}>
              <strong>{joke.question}</strong> - {joke.answer}
            </li>
          ))}
        </ul>
      ) : (
        <p>Not data here</p>
      )}
    </div>
  );
};

export default JokesList;
