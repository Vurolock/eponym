import React from 'react';
import './NameInput.scss';

type NameInputProps = {
  textState: [string, React.Dispatch<React.SetStateAction<string>>];
};

const NameInput = (props: NameInputProps) => {
  const text = props.textState[0];
  const setText = props.textState[1];

  return (
    <div>
      <textarea
        rows={4}
        cols={20}
        value={text}
        onChange={event => {
          setText(event.target.value);
        }}
      />
    </div>
  );
};

export default NameInput;
