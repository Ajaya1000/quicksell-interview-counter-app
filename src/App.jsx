import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import { Counter, Loader, CounterLabel } from './components';
import { fetchCounter, putCounter } from './apis';
import { networkQueuer } from './utils';

const App = () => {
  const [value, dispatchSetCount] = useState(1);
  const [fetchedValue, dispatchSetFetchedCount] = useState(1);
  const [loading, dispatchLoader] = useState(false);

  const dispatchStartLoader = useCallback(
    () => dispatchLoader(true),
    [dispatchLoader]
  );
  const dispatchEndLoader = useCallback(
    () => dispatchLoader(false),
    [dispatchLoader]
  );

  const syncValue = useCallback(async () => {
    try {
      dispatchStartLoader();
      let res = await fetchCounter();
      res = res || 1;

      dispatchSetCount(res);
      dispatchSetFetchedCount(res);

      dispatchEndLoader();
    } catch (e) {
      dispatchEndLoader();
      console.log(e);
    }
  }, [dispatchStartLoader, dispatchSetCount, dispatchEndLoader]);

  useEffect(() => {
    syncValue();
  }, [syncValue]);

  const onFinishLoading = useCallback(() => {
    dispatchEndLoader();
  }, [dispatchEndLoader]);

  useEffect(() => {
    networkQueuer.addCallbackMethod(onFinishLoading);
  }, [onFinishLoading]);

  const uploadValue = async (value) => {
    dispatchStartLoader();
    const onSuccess = (res) => {
      dispatchSetFetchedCount(res['amati'] ?? 1);
      // dispatchEndLoader();
    };
    const onFailure = () => {
      // dispatchEndLoader();
    };
    networkQueuer.addRequest(putCounter(value), onSuccess, onFailure);
  };

  const handleChange = (newValue) => {
    let res = parseInt(newValue || 0);
    const MAX_VALUE = process.env.MAX_VALUE || 1000;
    if (res > MAX_VALUE) return;
    dispatchSetCount(res);

    uploadValue(res);
  };

  return (
    <div className='App'>
      <div className='container'>
        <Loader isLoading={loading} />
        <Counter value={value} onChange={handleChange} />
        <CounterLabel value={fetchedValue} />
      </div>
    </div>
  );
};
export default App;
