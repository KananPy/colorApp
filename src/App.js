

import React from 'react';
import '../src/style/App.css';
import ColorForm from './components/ColorForm/ColorForm';
import ColorList from './components/ColorList/ColorList';

function App() {
  return (
    <div className="App">
      <h1>Color App</h1>
      <ColorForm />
      <ColorList />
    </div>
  );
}

export default App;
