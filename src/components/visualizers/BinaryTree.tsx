import React, { useState, useEffect } from 'react';
import { BinaryTreeMaker, BinaryTreeNode, generateRandomBinaryTree } from 'utils/binaryTree-utils';
import BinaryTreeDisplay from 'components/BinaryTreeDisplay';
//use style objects
export default function BinaryTree() {
  const [currentTree, setCurrentTree] = useState(
    new BinaryTreeMaker([
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '6',
      '6',
      '6',
      '6',
      '7000',
      '8',
      '9',
      '10',
      '100000',
      '6',
      '9',
      '7',
      '6',
      '6',
      '6',
      '7000',
      '8',
      '9',
      '10',
      '10000000000',
      '6',
      '9',
      '7',
      '6',
      '6',
      '6',
      '7000',
      '8',
      '9',
      '10',
      '100000',
      '6',
      '9',
    ])
  );
  const [val, setVal] = useState('');
  const [errorText, setErrorText] = useState('');
  const [output, setOutput] = useState('');
  const [selected, setSelected] = useState(-1);
  const [parentSelect, setParentSelect] = useState(-1);
  const [leftChild, setLeftChild] = useState(-1);
  const [rightChild, setRightChild] = useState(-1);

  return (
    <div className="container">
      <h1>Binary Tree</h1>
      <div className="btree-fields">
        <h2>Value:</h2>
        <label htmlFor="btree-val">
          <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
        </label>
        <h2>Output: {output}</h2>
        <h2>Error: {errorText}</h2>
      </div>
      <BinaryTreeDisplay
        setCurrentTree={setCurrentTree}
        currentTree={currentTree}
        selected={selected}
        setSelected={setSelected}
        setOutput={setOutput}
        parentSelect={parentSelect}
        setParentSelect={setParentSelect}
        leftChild={leftChild}
        setLeftChild={setLeftChild}
        rightChild={rightChild}
        setRightChild={setRightChild}
      />
    </div>
  );
}
