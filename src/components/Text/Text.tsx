import React from 'react';
import Character from '../Character/Character';
import './Text.scss';
import image from '../Character/egg.png';

type TextProps = {
  value: string;
};

const Text = (props: TextProps) => {
  const text = props.value
    .toUpperCase()
    .split('')
    .map((character, i) => (
      <Character value={character} image={image} key={i} />
    ));

  return <div className="Text">{text}</div>;
};

export default Text;
