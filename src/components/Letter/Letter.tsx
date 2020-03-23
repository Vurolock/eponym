import React from 'react';
// import logo from './logo.svg';
import './Letter.scss';
import letterMap from './LetterMap';
import egg from './egg.png';

type LetterProps = {
  value: string;
};

const Letter = (props: LetterProps): JSX.Element => {
  const propsLetter = props.value.toUpperCase();

  const pixels = (rowNum: number): JSX.Element[] => {
    return [...Array(letterMap[propsLetter][0].length)].map((element, i) => {
      for (const letter in letterMap) {
        if (letter === propsLetter) {
          return letterMap[letter][rowNum][i] ? (
            <div className="Letter-pixel" key={i}>
              <img src={egg} className="Letter-image" alt="" />
            </div>
          ) : (
            <div className="Letter-pixel" key={i} />
          );
        }
      }
      return <div className="Letter-pixel" key={i} />;
    });
  };

  const rows = [...Array(Object.keys(letterMap[propsLetter]).length)].map(
    (element, i) => (
      <div className="Letter-row" key={i}>
        {pixels(i)}
      </div>
    )
  );

  return <div className={'Letter'}>{rows}</div>;
};

export default Letter;
