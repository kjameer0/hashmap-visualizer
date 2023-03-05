import React, { useState } from 'react';
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
    ])
  );
  const [val, setVal] = useState('');
  const [errorText, setErrorText] = useState('');
  const [output, setOutPut] = useState('');
  const [selected, setSelected] = useState(0);

  return (
    <div className="container">
      <h1>Binary Tree</h1>
      <div className="btree-fields">
        <p>Value:</p>
        <label htmlFor="btree-val">
          <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
        </label>
      </div>
      <BinaryTreeDisplay setCurrentTree={setCurrentTree} currentTree={currentTree} />
    </div>
  );
}
