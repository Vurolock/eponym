import React, { useState } from 'react';
import './App.scss';
import Name from '../Name/Name';
import NameInput from '../NameInput/NameInput';

function App() {
  const [lines, setLines] = useState([<Name value="eponym" key={0} />]);

  const textHandler = (text: string) => {
    setLines(
      text.split('\n').map((line, i) => {
        return <Name value={line} key={i} />;
      })
    );
  };

  return (
    <div className="App">
      <header className="App-header">{lines}</header>
      <NameInput textHandler={textHandler} />
    </div>
  );
}

export default App;
