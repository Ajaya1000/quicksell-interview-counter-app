import React from 'react';
import './App.css';
import { Counter } from './components';

const App = () => {
  return (
    <div className='App'>
      <Counter value={10} />
    </div>
  );
};
export default App;
