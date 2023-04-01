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
  const [selected, setSelected] = useState('');
  //error text is cleared if hashmap or output is updated
  useEffect(() => {
    setErrorText('');
  }, [hashmap, output]);

  useEffect(() => {
    setOutPut('');
    setHashKey('');
    setHashVal('');
    setSelected('');
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
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>,
    setFunc: (s: string) => void,
    field?: string
  ) {
    setFunc(e.target.value);
    if (field === 'hashKey') {
      if (selected.length > 0 && e.target.value !== selected) {
        setSelected('');
      }
      if (hashmap.has(e.target.value)) {
        setSelected(e.target.value);
      }
    }
  }
  return (
    <div className="container">
      <h1 className="container-title">HashMap</h1>
      <div className="hash-instructions">
        <h2>Instructions:</h2>
        <p>
          Enter key and value and press enter or click SET to add new pair to Hashmap. Entering just
          a key and setting will set value to true. Clicking on an element lets you edit or delete
          it by using corresponding fields and buttons for your operations. Click selected element
          again to cancel.
        </p>
      </div>
      <div className={'hash-form'}>
        <div className="hash-input">
          <div className={'hash-field'}>
            <p className="hash-field-name">Key:</p>
            <label htmlFor="key-field">
              <input
                className="hash-in-field"
                type={'text'}
                value={hashKey}
                placeholder="Enter key"
                onChange={(e) => handleChange(e, setHashKey, 'hashKey')}
                onKeyDown={(e) => handleEnter(e, 'set')}
              />
            </label>
          </div>
          <div className={'hash-field'}>
            <p className="hash-field-name">Value:</p>
            <label htmlFor="val-field">
              <input
                className="hash-in-field"
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
          <button className="main-button hmap-button" onClick={handleSet}>
            Set
          </button>
          <button className="main-button hmap-button" onClick={handleGet}>
            Get
          </button>
          <button className="main-button hmap-button" onClick={handleHasKey}>
            Has Key
          </button>
          <button className="main-button hmap-button" onClick={handleDelete}>
            Delete
          </button>
          <button className="main-button hmap-button" onClick={handleKeys}>
            Keys
          </button>
          <button className="main-button hmap-button" onClick={handleValues}>
            Values
          </button>
          <button className="main-button hmap-button" onClick={handleSize}>
            Size
          </button>
          <button className="main-button hmap-button" onClick={handleClear}>
            Clear
          </button>
          <button className="main-button hmap-button" onClick={handleRandom}>
            Random Hash Map
          </button>
        </div>
        <div className="hash-output">
          <p className="hash-output-p">Error: {errorText}</p>
          <p className="hash-output-p">Output: {output}</p>
        </div>
      </div>
      <div className="hash-visual">
        <h2 className="hash-list-title">HashMap</h2>
        <HashVis
          hashmap={hashmap}
          setHashKey={setHashKey}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </div>
  );
}
