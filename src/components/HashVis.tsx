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
  function handleSelect(e: React.MouseEvent<HTMLLIElement>, pair: string[]) {
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
            onClick={(e) => handleSelect(e, pair)}
            style={{ backgroundColor: selected === pair[0] ? 'white' : undefined }}
          >
            <p>{pair[0]}</p>
            <p>{pair[1]}</p>
          </li>
        );
      })}
    </ul>
  );
}
