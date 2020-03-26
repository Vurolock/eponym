import React, { useState, useEffect } from 'react';
import './App.scss';
// import Name from '../Name/Name';
import NameInput from '../NameInput/NameInput';

function App() {
  const [text, setText] = useState('andrew keller');

  useEffect(() => {
    console.log(text.split('\n'));
  });

  return (
    <div className="App">
      <header className="App-header">
        {/* <Name value="Andrew Keller" /> */}
      </header>
      <NameInput textState={[text, setText]} />
    </div>
  );
}

export default App;
