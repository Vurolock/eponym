import React from 'react';
import './Character.scss';
import characterMap from './CharacterMap';

type CharacterProps = {
  value: string;
  image: string;
};

const Character = (props: CharacterProps): JSX.Element => {
  const pixels = (rowNum: number): JSX.Element[] => {
    return [...Array(characterMap[props.value][0].length)].map((element, i) => {
      for (const character in characterMap) {
        if (character === props.value) {
          return characterMap[character][rowNum][i] ? (
            <div className="Character-pixel" key={i}>
              <img src={props.image} className="Character-image shake" alt="" />
            </div>
          ) : (
            <div className="Character-pixel" key={i} />
          );
        }
      }
      return <div className="Character-pixel" key={i} />;
    });
  };

  const rows = [...Array(Object.keys(characterMap[props.value]).length)].map(
    (element, i) => (
      <div className="Character-row" key={i}>
        {pixels(i)}
      </div>
    )
  );

  return <div className={'Character'}>{rows}</div>;
};

export default Character;
