import React, { useState } from 'react';
import './NameInput.scss';

type NameInputProps = {
  textHandler: (text: string) => void;
};

const NameInput = (props: NameInputProps) => {
  const [text, setText] = useState('eponym');

  const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = event.target.value;
    const charRegex = /^[a-z.\s]{0,1}$/i; // exactly 0 or 1 letter, peroid, or whitespace

    if (charRegex.test(input.charAt(input.length - 1))) {
      setText(input);
      props.textHandler(input);
    } else {
      text.slice(0, -1);
    }
  };

  return (
    <div>
      <textarea
        rows={4}
        cols={20}
        value={text}
        autoFocus={true}
        onChange={event => changeHandler(event)}
      />
    </div>
  );
};

export default NameInput;
