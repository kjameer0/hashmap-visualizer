import { useState } from 'react';
export default function HashVis({
  hashmap,
  setHashmap,
}: {
  hashmap: Map<string, string>;
  setHashmap: (map: Map<string, string>) => void;
}) {
  return (
    <ul>
      {Array.from(hashmap).map((pair, index) => {
        return (
          <li key={index}>
            <p>{pair[0]}</p>
            <p>{pair[1]}</p>
          </li>
        );
      })}
    </ul>
  );
}
