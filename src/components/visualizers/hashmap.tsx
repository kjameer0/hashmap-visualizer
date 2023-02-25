import React, { useState } from 'react';
import { produceErrorMessage } from 'utils/arr-utils';
import HashVis from 'components/HashVis';
export default function HashMap() {
  const [hashmap, setHashmap] = useState(
    new Map([
      ['key1', 'value1'],
      ['key2', 'value2'],
    ])
  );
  const [hashKey, setHashKey] = useState('');
  const [hashVal, setHashVal] = useState('');
  const [errorText, setErrorText] = useState('');
  const [output, setOutPut] = useState('');
  function handleSet() {
    //checks if key exists, creates new map, adds new value, clears fields
    try {
      let val = hashVal;
      if (!hashKey) throw new Error('No Key Given');
      if (val.length === 0) val = 'true';
      const newMap = new Map([...hashmap]);
      newMap.set(hashKey, val);
      setHashmap(newMap);
      setHashKey('');
      setHashVal('');
    } catch (error) {
      const err = produceErrorMessage(error);
      setErrorText(err);
    }
  }
  return (
    <div className="container">
      <h1>HashMap</h1>
      <div className="instructions">
        <p>Instructions:</p>
      </div>
      <div className={'hash-form'}>
        <div className="hash-input">
          <div className={'hash-field'}>
            <p>Key:</p>
            <label htmlFor="key-field">
              <input
                type={'text'}
                value={hashKey}
                placeholder="Enter key"
                onChange={(e) => setHashKey(e.target.value)}
              />
            </label>
          </div>
          <div className={'hash-field'}>
            <p>Value:</p>
            <label htmlFor="val-field">
              <input
                type={'text'}
                value={hashVal}
                placeholder="Enter value"
                onChange={(e) => setHashVal(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="hash-buttons">
          <button className="main-button" onClick={handleSet}>
            Set
          </button>
          <button className="main-button">Get</button>
          <button className="main-button">Has Key</button>
          <button className="main-button">Delete</button>
          <button className="main-button">Keys</button>
          <button className="main-button">Values</button>
          <button className="main-button">Size</button>
        </div>
        <div className="hash-output">
          <p>Error: {errorText}</p>
          <p>Output: {output}</p>
        </div>
      </div>
      <div className="hash-visual">
        <h2>HashMap</h2>
        <HashVis hashmap={hashmap} setHashmap={setHashmap} />
      </div>
    </div>
  );
}
