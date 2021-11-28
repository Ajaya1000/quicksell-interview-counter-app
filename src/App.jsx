import React, { useEffect, useState } from 'react';
import './App.css';
import { Counter, Loader, CounterLabel } from './components';
import { useReducer } from './utils';
import { countReducer } from './reducers';
import { setCount } from './actions';

const intialState = {
  value: 1,
  fetchedValue: 1,
  loading: false,
};
const App = () => {
  const [state, dispatch] = useReducer(countReducer, intialState);

  const { value, loading } = state;

  const setValue = (value) => {
    dispatch(setCount(value));
  };

  useEffect(() => {}, []);

  return (
    <div className='App'>
      <div className='container'>
        <Loader isLoading={loading} />
        <Counter
          value={value}
          onChange={setValue}
          onIncrement={() => console.log('Inc')}
          onDecrement={() => console.log('Dec')}
        />
        <CounterLabel value={value} />
      </div>
    </div>
  );
};
export default App;
