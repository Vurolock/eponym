import React from 'react';
import logo from './logo.svg';
import './Letter.scss';

type LetterProps = {
  value: string;
};

// all other letters take 4 columns
const fiveColumns = ['K', 'M', 'N', 'V', 'W', 'X', 'Y'];

const Letter = (props: LetterProps): JSX.Element => {
  const letter = props.value.toUpperCase();
  const numColumns = fiveColumns.includes(letter) ? 5 : 4;
  const numRows = letter === 'Q' ? 6 : letter === ' ' ? 1 : 5;

  const pixels = (rowNum: number): JSX.Element[] => {
    console.log(rowNum);
    return [...Array(numColumns)].map((element, i) => (
      <div className="Letter-pixel" key={i}>
        <img src={logo} className="Letter-image" alt="" />
      </div>
    ));
  };

  const rows = [...Array(numRows)].map((element, i) => (
    <div className="Letter-row" key={i}>
      {pixels(i)}
    </div>
  ));

  return <div className={letter}>{rows}</div>;
};

export default Letter;
