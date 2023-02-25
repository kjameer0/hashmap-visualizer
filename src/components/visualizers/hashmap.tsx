import React, { useState } from 'react';
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
  return (
    <div className="container">
      <div className="instructions">
        <p>Enter a key and value to add or delete</p>
        <p>Current Map:{}</p>
      </div>
      <div className={'hash-form'}>
        <div className="hash-input">
          <div className={'hash-field'}>
            <p>Key:</p>
            <label htmlFor="key-field">
              <input
                type={'text'}
                value={hashKey}
                placeholder="enter key "
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
          <button>Set</button>
          <button>Get</button>
          <button>Has Key</button>
          <button>Delete</button>
          <button>Keys</button>
          <button>Values</button>
          <button>Size</button>
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
