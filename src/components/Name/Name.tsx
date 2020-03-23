import React from 'react';
import Letter from '../Letter/Letter';
import './Name.css';

type NameProps = {
  value: string;
};

const Name = (props: NameProps) => {
  const name = props.value
    .toUpperCase()
    .split('')
    .map((letter, i) => <Letter value={letter} key={i} />);

  return <div className="Name">{name}</div>;
};

export default Name;
