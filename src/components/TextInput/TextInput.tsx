import React, { useState } from 'react';
import './TextInput.scss';

type TextInputProps = {
  textHandler: (text: string) => void;
};

const TextInput = (props: TextInputProps) => {
  const [text, setText] = useState('eponym');

  const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = event.target.value;
    const characterRegex = /^[a-z0-9.,!?/:;\-_\s]{0,}$/i; // allowed characters

    if (characterRegex.test(input)) {
      setText(input);
      props.textHandler(input);
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

export default TextInput;
