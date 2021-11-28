import React from 'react';
import './App.css';
import { Counter, Loader, CounterLabel } from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='container'>
        <Loader isLoading />
        <Counter value={10} />
        <CounterLabel value={10} />
      </div>
    </div>
  );
};
export default App;
