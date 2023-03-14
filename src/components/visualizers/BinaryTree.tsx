import React, { useState, useEffect } from 'react';
import { produceErrorMessage } from 'utils/arr-utils';
import { BinaryTreeMaker, BinaryTreeNode, generateRandomBinaryTree } from 'utils/binaryTree-utils';
import BinaryTreeDisplay from 'components/BinaryTreeDisplay';
import { outputDivStyles } from 'styles/btree-styles';
//use style objects
type selectType = number | null;
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
  const [selected, setSelected] = useState(-1 as selectType);
  const [selectedText, setSelectedText] = useState('');
  const [parentSelect, setParentSelect] = useState(-1);
  const [leftChild, setLeftChild] = useState(-1);
  const [rightChild, setRightChild] = useState(-1);

  function handleSelectedChange(e: React.ChangeEvent<HTMLInputElement>) {
    try {
      const val = e.target.value;
      if (val.length > 0 && /^[0-9]+$/.test(val) === false) {
        throw new Error('invalid input');
      }
      setSelectedText(val);
      const newVal = Number(val);
      setSelected(newVal);
      setParentSelect(currentTree.getParentIdx(newVal));
      setLeftChild(currentTree.getLeftChildIdx(newVal));
      setRightChild(currentTree.getRightChildIdx(newVal));
      setOutput(currentTree.getVal(Number(newVal)));
      setErrorText('');
    } catch (error) {
      setErrorText(produceErrorMessage(error));
      setOutput('');
    }
  }
  function handleSetVal(e: React.MouseEvent<HTMLButtonElement>) {
    try {
      if (val === '') {
        throw new Error('enter a value');
      }
      const newTree = new BinaryTreeMaker([...currentTree.tree]);
      newTree.setValAtIdx(val, selected);
      setCurrentTree(newTree);
      setOutput(val);
      setVal('');
    } catch (error) {
      setErrorText(produceErrorMessage(error));
    }
  }
  function handleSetLeft(e: React.MouseEvent<HTMLButtonElement>) {
    try {
      if (val === '' || selected === null) {
        throw new Error('enter a value and select a node');
      }
      const newTree = new BinaryTreeMaker([...currentTree.tree]);
      newTree.insert(val, selected, 'left');
      setCurrentTree(newTree);
      setOutput(val);
      setVal('');
    } catch (error) {
      setErrorText(produceErrorMessage(error));
    }
  }
  function handleSetRight(e: React.MouseEvent<HTMLButtonElement>) {
    try {
      if (val === '' || selected === null) {
        throw new Error('enter a value and select a node');
      }
      const newTree = new BinaryTreeMaker([...currentTree.tree]);
      newTree.insert(val, selected, 'left');
      setCurrentTree(newTree);
      setOutput(val);
      setVal('');
    } catch (error) {
      setErrorText(produceErrorMessage(error));
    }
  }
  function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
    try {
      if (selected === null || selected < 0) {
        throw new Error('choose value to delete');
      }
      const newTree = new BinaryTreeMaker([...currentTree.tree]);
      newTree.delete(selected);
      setCurrentTree(newTree);
      setVal('');
    } catch (error) {
      setErrorText(produceErrorMessage(error));
    }
  }
  return (
    <div className="container">
      <h1>Binary Tree</h1>
      <div className="btree-fields">
        <div className="btree-input" style={{ display: 'flex' }}>
          <h2>Value:</h2>
          <label htmlFor="btree-val">
            <input
              type="text"
              value={val}
              onChange={(e) => setVal(e.target.value)}
              style={{ color: 'black' }}
            />
          </label>
          <h2>Index:</h2>
          <label htmlFor="btree-index">
            <input
              type="text"
              style={{ color: 'black' }}
              value={String(selectedText)}
              onChange={(e) => handleSelectedChange(e)}
            />
          </label>
        </div>
        <div className="btree-buttons">
          <button className="main-button" onClick={handleSetVal}>
            Set Val
          </button>
          <button className="main-button" onClick={handleSetLeft}>
            Set Left
          </button>
          <button className="main-button" onClick={handleSetRight}>
            Set Right
          </button>
          <button className="main-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
        <div style={outputDivStyles()}>
          <h2>Output:</h2> <p style={{ marginLeft: '1%' }}>{output}</p>
        </div>
        <div style={outputDivStyles()}>
          <h2>Error:</h2>
          <p style={{ marginLeft: '1%' }}>{errorText}</p>
        </div>
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
