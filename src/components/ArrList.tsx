import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
type swap = {
  idx: number;
  val: string;
};

export default function ArrList({
  arr,
  setArr,
}: {
  arr: string[];
  setArr: (array: string[]) => void;
}) {
  const [swapVal, setSwapVal] = useState({ idx: -1, val: '' });
  const [held, setHeld] = useState(false);
  function handleSwapClick(e: React.MouseEvent<HTMLButtonElement>, value: swap) {
    if (held) {
      const { idx, val } = value;
      const newArr = [...arr];
      newArr[idx] = swapVal.val;
      newArr[swapVal.idx] = val;
      setArr(newArr);
    } else {
      setSwapVal(value);
    }
    setHeld(!held);
  }
  return (
    <div className="App">
      <ul className="arr-list">
        {arr.map((el, idx) => {
          return (
            <li key={idx}>
              <p>{idx}</p>
              <button onClick={(e) => handleSwapClick(e, { idx, val: el })}>val:{el}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
