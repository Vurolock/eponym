import React from 'react';
import logo from './logo.svg';
import './Letter.scss';

type LetterProps = {
  value: string;
};

type LetterMap = {
  [index: string]: {
    [index: number]: boolean[];
  };
};

// all other letters take 4 columns
const fiveColumns = ['K', 'M', 'N', 'V', 'W', 'X', 'Y'];

const letterMap: LetterMap = {
  A: {
    0: [false, true, true, false],
    1: [true, false, false, true],
    2: [true, true, true, true],
    3: [true, false, false, true],
    4: [true, false, false, true]
  }
};

const Letter = (props: LetterProps): JSX.Element => {
  const propsLetter = props.value.toUpperCase();
  const numColumns = fiveColumns.includes(propsLetter) ? 5 : 4;
  const numRows = propsLetter === 'Q' ? 6 : propsLetter === ' ' ? 1 : 5;

  const pixels = (rowNum: number): JSX.Element[] => {
    return [...Array(numColumns)].map((element, i) => {
      for (const letter in letterMap) {
        if (letter === propsLetter) {
          return letterMap[letter][rowNum][i] ? (
            <div className="Letter-pixel" key={i}>
              <img src={logo} className="Letter-image" alt="" />
            </div>
          ) : (
            <div className="Letter-pixel" key={i} />
          );
        }
      }
      return <div className="Letter-pixel" key={i} />;
    });
  };

  const rows = [...Array(numRows)].map((element, i) => (
    <div className="Letter-row" key={i}>
      {pixels(i)}
    </div>
  ));

  return <div className={propsLetter}>{rows}</div>;
};

export default Letter;
