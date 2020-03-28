import React, { useState } from 'react';
import './App.scss';
import Text from '../Text/Text';
import TextInput from '../TextInput/TextInput';

function App() {
  const [lines, setLines] = useState([<Text value="eponym" key={0} />]);

  const textHandler = (text: string) => {
    setLines(
      text.split('\n').map((line, i) => {
        return <Text value={line} key={i} />;
      })
    );
  };

  return (
    <div className="App">
      <header className="App-header">{lines}</header>
      <TextInput textHandler={textHandler} />
      <footer>
        <a
          href="https://github.com/Vurolock/eponym"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      </footer>
    </div>
  );
}

export default App;
