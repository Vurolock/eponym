import React from 'react';
import Letter from '../Letter/Letter';
import './Name.css';
import image from '../Letter/egg.png';

type NameProps = {
  value: string;
};

const Name = (props: NameProps) => {
  const name = props.value
    .toUpperCase()
    .split('')
    .map((letter, i) => <Letter value={letter} image={image} key={i} />);

  return <div className="Name">{name}</div>;
};

export default Name;
