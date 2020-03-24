import React from 'react';
import image from './egg.png';
import './Letter.scss';
import letterMap from './LetterMap';

type LetterProps = {
  value: string;
};

const Letter = (props: LetterProps): JSX.Element => {
  const pixels = (rowNum: number): JSX.Element[] => {
    return [...Array(letterMap[props.value][0].length)].map((element, i) => {
      for (const letter in letterMap) {
        if (letter === props.value) {
          return letterMap[letter][rowNum][i] ? (
            <div className="Letter-pixel" key={i}>
              <img src={image} className="Letter-image" alt="" />
            </div>
          ) : (
            <div className="Letter-pixel" key={i} />
          );
        }
      }
      return <div className="Letter-pixel" key={i} />;
    });
  };

  const rows = [...Array(Object.keys(letterMap[props.value]).length)].map(
    (element, i) => (
      <div className="Letter-row" key={i}>
        {pixels(i)}
      </div>
    )
  );

  return <div className={'Letter'}>{rows}</div>;
};

export default Letter;
