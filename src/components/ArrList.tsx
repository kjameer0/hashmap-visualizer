import React, { useState } from 'react';

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
  const [swapVal, setSwapVal] = useState({} as swap);
  const [held, setHeld] = useState(false);
  function handleSwapClick(e: React.MouseEvent<HTMLButtonElement>, value: swap) {
    if (held) {
      const { idx, val } = value;
      const newArr = [...arr];
      newArr[idx] = swapVal.val;
      newArr[swapVal.idx] = val;
      setArr(newArr);
      setSwapVal({} as swap);
    } else {
      setSwapVal(value);
    }
    setHeld(!held);
  }
  return (
    <ul className="arr-list">
      {arr.map((el, idx) => {
        return (
          <li key={idx}>
            <p>{idx}</p>
            <button
              className="arr-el-button"
              style={{ backgroundColor: swapVal.idx === idx ? 'white' : '#261785' }}
              onClick={(e) => handleSwapClick(e, { idx, val: el })}
            >
              {el}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
