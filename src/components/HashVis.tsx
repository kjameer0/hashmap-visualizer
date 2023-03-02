import { useState } from 'react';
export default function HashVis({
  hashmap,
  setHashmap,
  selected,
  setSelected,
  setHashKey,
}: {
  hashmap: Map<string, string>;
  setHashmap: (map: Map<string, string>) => void;
  selected: string;
  setSelected: (a: string) => void;
  setHashKey: (key: string) => void;
}) {
  function handleSelect(e: React.MouseEvent<HTMLButtonElement>, pair: string[]) {
    if (selected === pair[0]) {
      setSelected('');
      setHashKey('');
      return;
    }
    setSelected(pair[0]);
    setHashKey(pair[0]);
  }
  return (
    <ul>
      {Array.from(hashmap).map((pair, index) => {
        return (
          <li
            key={index}
            style={{
              backgroundColor: selected === pair[0] ? 'white' : undefined,
              color: selected === pair[0] ? 'black' : undefined,
            }}
          >
            <button key={index} onClick={(e) => handleSelect(e, pair)}>
              <p>{pair[0]}</p>
              <p>{pair[1]}</p>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
