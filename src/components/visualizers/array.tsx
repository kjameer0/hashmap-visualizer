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

export default function Arr() {
  //useScript('src/utils/arr-script.ts');
  const [arr, setArr] = useState(['1', '2', '3']);
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
          <input type="text" name="array-input" id="array-input" />
          <button className="arr-button" type="submit" id="submit-arr">
            Make Array
          </button>
        </div>
        <div className="arr-input-line">
          <label htmlFor="arr-maker">Make random array of length:</label>
          <input type="text" id="submit-len" name="submit-len" />
          <button className="arr-button" type="submit" id="make-random">
            Make Random Array
          </button>
        </div>
        <div className="arr-input-line">
          <label htmlFor="concat-maker">Concat array to existing array:</label>
          <input type="text" id="concat-maker" name="concat-maker" />
          <button className="arr-button" type="submit" id="concat-arr">
            Concat
          </button>
        </div>
        <div className="arr-input-line">
          <label htmlFor="push-input">Value to push:</label>
          <input type="text" id="push-input" name="push-input" />
          <button className="arr-button" type="submit" id="push-arr">
            Push
          </button>
        </div>
        <div className="arr-input-line">
          <label htmlFor="unshift-input">Value to unshift:</label>
          <input type="text" id="unshift-input" name="unshift-input" />
          <button className="arr-button" type="submit" id="unshift-arr">
            Unshift
          </button>
        </div>
        <button className="arr-button" type="submit" id="pop-arr">
          Pop
        </button>
        <button className="arr-button" type="submit" id="shift-arr">
          Shift
        </button>
        <button className="arr-button" type="submit" id="make-empty">
          Clear All
        </button>
        <div id="array-container" />
      </div>
      <h2 className="arr-title">
        <strong>Array</strong>
      </h2>
      <ArrList arr={arr} setArr={setArr} />
    </div>
  );
}
