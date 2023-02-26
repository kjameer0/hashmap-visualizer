import React, { useEffect, useState } from 'react';
import { produceErrorMessage } from 'utils/arr-utils';
import { generateRandomHashMap } from 'utils/hashmap-utils';
import HashVis from 'components/HashVis';
export default function HashMap() {
  const [hashmap, setHashmap] = useState(new Map());
  const [hashKey, setHashKey] = useState('');
  const [hashVal, setHashVal] = useState('');
  const [errorText, setErrorText] = useState('');
  const [output, setOutPut] = useState('');
  //error text is cleared if hashmap or output is updated
  useEffect(() => {
    setErrorText('');
  }, [hashmap, output]);

  useEffect(() => {
    setOutPut('');
  }, [hashmap]);

  function resetFields() {
    // reset text fields
    setHashKey('');
    setHashVal('');
  }
  function handleSet() {
    //checks if key exists, creates new map, adds new value, clears fields
    try {
      let val = hashVal;
      if (!hashKey) throw new Error('No Key Given');
      //if there is no value in hashVal field default val to true
      if (val.length === 0) val = 'true';
      //make a new map that copies old hashmap and adds new key-value
      setHashmap(new Map([...hashmap, [hashKey, val]]));
      resetFields();
    } catch (error) {
      //set error text in component state to display error message
      setErrorText(produceErrorMessage(error));
    }
  }
  //print map.get to output field
  function handleGet() {
    try {
      if (!hashKey) throw new Error('No Key Given');
      setOutPut(`Value: ${String(hashmap.get(hashKey))}`);
      resetFields();
    } catch (error) {
      setErrorText(produceErrorMessage(error));
    }
  }
  //print map.has to output field
  function handleHasKey() {
    try {
      if (!hashKey) throw new Error('No Key Given');
      setOutPut(String(hashmap.has(hashKey)));
      resetFields();
    } catch (error) {
      setErrorText(produceErrorMessage(error));
    }
  }
  function handleDelete() {
    try {
      if (!hashKey) throw new Error('No Key Given');
      const newMap = new Map([...hashmap]);
      newMap.delete(hashKey);
      setHashmap(newMap);
      resetFields();
    } catch (error) {
      setErrorText(produceErrorMessage(error));
    }
  }
  //print all keys of map to output field
  function handleKeys() {
    try {
      if (!hashmap.size) throw new Error('No hashmap to reference');
      setOutPut(Array.from(hashmap.keys()).join(', '));
    } catch (error) {
      setErrorText(produceErrorMessage(error));
    }
  }
  //print all values of map to output field
  function handleValues() {
    try {
      if (!hashmap.size) throw new Error('No hashmap to reference');
      setOutPut(Array.from(hashmap.values()).join(', '));
    } catch (error) {
      setErrorText(produceErrorMessage(error));
    }
  }
  //print number of elements in map to output field
  function handleSize() {
    try {
      setOutPut(String(hashmap.size));
    } catch (error) {
      setErrorText(produceErrorMessage(error));
    }
  }
  function handleRandom() {
    setHashmap(generateRandomHashMap());
  }
  function handleClear() {
    setHashmap(new Map());
  }
  function handleEnter(e: React.KeyboardEvent<HTMLInputElement>, field: string) {
    if (e.key !== 'Enter') return;
    if (field === 'set') handleSet();
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
                onKeyDown={(e) => handleEnter(e, 'set')}
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
                onKeyDown={(e) => handleEnter(e, 'set')}
              />
            </label>
          </div>
        </div>
        <div className="hash-buttons">
          <button className="main-button" onClick={handleSet}>
            Set
          </button>
          <button className="main-button" onClick={handleGet}>
            Get
          </button>
          <button className="main-button" onClick={handleHasKey}>
            Has Key
          </button>
          <button className="main-button" onClick={handleDelete}>
            Delete
          </button>
          <button className="main-button" onClick={handleKeys}>
            Keys
          </button>
          <button className="main-button" onClick={handleValues}>
            Values
          </button>
          <button className="main-button" onClick={handleSize}>
            Size
          </button>
          <button className="main-button" onClick={handleClear}>
            Clear
          </button>
          <button className="main-button" onClick={handleRandom}>
            Random Hash Map
          </button>
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
