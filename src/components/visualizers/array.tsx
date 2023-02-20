import { useState } from 'react';
import ArrList from 'components/ArrList';
export function Tesst() {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', event.currentTarget.id);
  };
  const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('text');
    console.log(`Somebody dropped an element with id: ${id}`);
  };
  return (
    <div>
      <div id="d1" draggable="true" onDragStart={handleDragStart}>
        Drag me
      </div>
      <div id="d2" draggable="true" onDragStart={handleDragStart}>
        Or me!
      </div>
      <div onDragOver={enableDropping} onDrop={handleDrop}>
        Drop Area
      </div>
    </div>
  );
}
import { stringToArray, generateRandomArray, produceErrorMessage } from 'utils/arr-utils';

export default function Arr() {
  const [arr, setArr] = useState([] as string[]);
  const [makeField, setMakeField] = useState('');
  const [makeRandomField, setMakeRandomField] = useState('');
  const [concatField, setConcatField] = useState('');
  const [pushField, setPushField] = useState('');
  const [unshiftField, setUnshiftField] = useState('');
  const [errorText, setErrorText] = useState('');
  function handleMakeArrayClick() {
    try {
      if (!makeField.length) throw new Error('Please enter literally anything to make an array');
      const newArr = stringToArray(makeField);
      setMakeField('');
      setArr(newArr);
    } catch (error) {
      const message = produceErrorMessage(error);
      setErrorText(message);
    }
  }
  function handleMakeRandomClick() {
    try {
      if (!/^[0-9]+$/.test(makeRandomField) && makeRandomField !== '') {
        throw new Error('enter a number or nothing in random field');
      }
      let arrLen;
      if (makeRandomField.length === 0) arrLen = 10;
      else arrLen = Number(makeRandomField);
      const newArr = generateRandomArray(arrLen);
      setMakeRandomField('');
      setArr(newArr);
    } catch (error) {
      const message = produceErrorMessage(error);
      setErrorText(message);
    }
  }
  function handleConcatClick() {
    try {
      if (!concatField.length) throw new Error('Please enter literally anything to add to array');
      const newArr = arr.concat(stringToArray(concatField));
      setConcatField('');
      setArr(newArr);
    } catch (error) {
      const message = produceErrorMessage(error);
      setErrorText(message);
    }
  }
  function handlePushClick() {
    try {
      if (!pushField.length) throw new Error('enter value to push');
      const newArr = [...arr, pushField];
      setPushField('');
      setArr(newArr);
    } catch (error) {
      const message = produceErrorMessage(error);
      setErrorText(message);
    }
  }
  function handleUnshiftClick() {
    try {
      if (!unshiftField.length) throw new Error('enter value to unshift');
      const newArr = [unshiftField, ...arr];
      setUnshiftField('');
      setArr(newArr);
    } catch (error) {
      const message = produceErrorMessage(error);
      setErrorText(message);
    }
  }
  function handleEnter(e: React.KeyboardEvent<HTMLInputElement>, field: string) {
    if (e.key !== 'Enter') return;
    if (field === 'make') handleMakeArrayClick();
    if (field === 'random') handleMakeRandomClick();
    if (field === 'concat') handleConcatClick();
    if (field === 'push') handlePushClick();
    if (field === 'unshift') handleUnshiftClick();
  }
  return (
    <div className="container">
      <h1>Array Visualizer</h1>
      <p className="sub-title">Press Enter in any text field to submit</p>
      <p className="sub-title">
        Make Random Array button will make 10 length array if field is empty
      </p>
      <p className="sub-title">Drag array elements over each other to swap</p>
      <br />
      <div>
        <div className="arr-input-line">
          <label htmlFor="array-input">Put your comma separated array here:</label>
          <input
            value={makeField}
            onChange={(e) => setMakeField(e.target.value)}
            type="text"
            name="array-input"
            id="array-input"
            onKeyDown={(e) => handleEnter(e, 'make')}
          />
          <button
            className="arr-button"
            type="submit"
            id="submit-arr"
            onClick={() => handleMakeArrayClick()}
          >
            Make Array
          </button>
        </div>
        <div className="arr-input-line">
          <label htmlFor="arr-maker">Make random array of length:</label>
          <input
            type="text"
            id="submit-len"
            value={makeRandomField}
            onChange={(e) => setMakeRandomField(e.target.value)}
            onKeyDown={(e) => handleEnter(e, 'random')}
            name="submit-len"
          />
          <button
            className="arr-button"
            type="submit"
            id="make-random"
            onClick={(e) => handleMakeRandomClick()}
          >
            Make Random Array
          </button>
        </div>
        <div className="arr-input-line">
          <label htmlFor="concat-maker">Concat array to existing array:</label>
          <input
            type="text"
            id="concat-maker"
            name="concat-maker"
            value={concatField}
            onChange={(ev) => setConcatField(ev.target.value)}
            onKeyDown={(e) => handleEnter(e, 'concat')}
          />
          <button className="arr-button" type="submit" id="concat-arr" onClick={handleConcatClick}>
            Concat
          </button>
        </div>
        <div className="arr-input-line">
          <label htmlFor="push-input">Value to push:</label>
          <input
            type="text"
            id="push-input"
            name="push-input"
            value={pushField}
            onChange={(e) => setPushField(e.target.value)}
            onKeyDown={(e) => handleEnter(e, 'push')}
          />
          <button className="arr-button" type="submit" id="push-arr" onClick={handlePushClick}>
            Push
          </button>
        </div>
        <div className="arr-input-line">
          <label htmlFor="unshift-input">Value to unshift:</label>
          <input
            type="text"
            id="unshift-input"
            name="unshift-input"
            value={unshiftField}
            onChange={(e) => setUnshiftField(e.target.value)}
            onKeyDown={(e) => handleEnter(e, 'unshift')}
          />
          <button
            className="arr-button"
            type="submit"
            id="unshift-arr"
            onClick={handleUnshiftClick}
          >
            Unshift
          </button>
        </div>
        <button
          className="arr-button"
          type="submit"
          id="pop-arr"
          onClick={() => setArr([...arr].slice(0, arr.length - 1))}
        >
          Pop
        </button>
        <button
          className="arr-button"
          type="submit"
          id="shift-arr"
          onClick={() => setArr([...arr].slice(1))}
        >
          Shift
        </button>
        <button
          className="arr-button"
          type="submit"
          id="make-empty"
          onClick={() => setArr([] as string[])}
        >
          Clear All
        </button>
        <div id="array-container" />
      </div>
      <h2 className="arr-title">Array</h2>
      <ArrList arr={arr} setArr={setArr} />
    </div>
  );
}
