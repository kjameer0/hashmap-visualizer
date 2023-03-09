import React, { useEffect, useState } from 'react';
import { BinaryTreeMaker, BinaryTreeNode } from 'utils/binaryTree-utils';
import * as CSS from 'csstype';

const cellPStyles: CSS.Properties = {
  textAlign: 'center',
  fontSize: '1.2rem',
  width: '1.2rem',
  border: '0px solid white',
};
export default function BinaryTreeVisNode({
  currentTree,
  setCurrentTree,
  idx,
  val,
  selected,
  setSelected,
  setOutput,
}: {
  currentTree: BinaryTreeMaker;
  setCurrentTree: (tree: BinaryTreeMaker) => void;
  idx: number;
  val: BinaryTreeNode;
  selected: number;
  setSelected: (s: number) => void;
  setOutput: (s: string) => void;
}) {
  //const [flag, setFlag] = useState(false);
  const cellStyles: CSS.Properties = {
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid',
    borderRadius: selected === idx ? '0%' : '50%',
    padding: '1%',
    margin: '1% auto',
    overflow: 'hidden',
    backgroundColor: selected === idx ? '#763DD4' : undefined,
    borderColor: selected === idx ? 'blue' : 'red',
    // flex: flag === true ? '0.1' : undefined,
    //width: selected === idx ? '200px' : 'auto',
  };

  function handleSelect() {
    setSelected(idx);
    setOutput(currentTree.getVal(idx));
    // setFlag(!flag);
  }
  return (
    <button
      style={{ ...cellStyles, visibility: val === 'null' ? 'hidden' : 'visible' }}
      onClick={handleSelect}
    >
      <p style={cellPStyles}>{val === 'null' ? idx : val}</p>
    </button>
  );
}
