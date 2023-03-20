import React, { useState, useEffect } from 'react';
import { produceErrorMessage } from 'utils/arr-utils';
import { BinaryTreeMaker, BinaryTreeNode, generateRandomBinaryTree } from 'utils/binaryTree-utils';
import BinaryTreeDisplay from 'components/BinaryTreeDisplay';
import {
  bTreeInputDivStyles,
  outputDivStyles,
  bTreeInputStyles,
  bTreeButtonStyles,
} from 'styles/btree-styles';
// const arr =[
//   '1',
//   '2',
//   '3',
//   '4',
//   '5',
//   '6',
//   '6',
//   '6',
//   '6',
//   '6',
//   '7000',
//   '8',
//   '9',
//   '10',
//   '100000',
//   '6',
//   '9',
//   '7',
//   '6',
//   '6',
//   '6',
//   '7000',
//   '8',
//   '9',
//   '10',
//   '10000000000',
//   '6',
//   '9',
//   '7',
//   '6',
//   '6',
//   '6',
//   '7000',
//   '8',
//   '9',
//   '10',
//   '100000',
//   '6',
//   '9',
// ]
type selectType = number | null;
export default function BinaryTree() {
  const [currentTree, setCurrentTree] = useState(new BinaryTreeMaker([]));
  const [val, setVal] = useState('');
  const [errorText, setErrorText] = useState('');
  const [output, setOutput] = useState('');
  const [selected, setSelected] = useState(-1 as selectType);
  const [selectedText, setSelectedText] = useState('');
  const [parentSelect, setParentSelect] = useState(-1);
  const [leftChild, setLeftChild] = useState(-1);
  const [rightChild, setRightChild] = useState(-1);
  const [focused, setFocused] = useState(false);
  const [viewInstructions, setViewInstructions] = useState(false);
  function handleSelectedChange(e: React.ChangeEvent<HTMLInputElement>) {
    try {
      const val = e.target.value;
      if (val.length > 0 && /^[0-9]+$/.test(val) === false) {
        throw new Error('invalid input');
      }
      setSelectedText(val);
      const newVal = val === '' ? -1 : Number(val);
      setSelected(newVal);
      setParentSelect(currentTree.getParentIdx(newVal));
      setLeftChild(currentTree.getLeftChildIdx(newVal));
      setRightChild(newVal === -1 ? -1 : currentTree.getRightChildIdx(newVal));
      setOutput(currentTree.getVal(newVal));
      setErrorText('');
    } catch (error) {
      setErrorText(produceErrorMessage(error));
      setOutput('');
    }
  }
  function handleRandomTree() {
    setCurrentTree(generateRandomBinaryTree(64));
  }
  function handleSetVal(e: React.MouseEvent<HTMLButtonElement>) {
    try {
      if (val === '') {
        throw new Error('enter a value');
      }
      const newTree = new BinaryTreeMaker([...currentTree.tree]);
      //if there is no tree and use hits set val button, make val root of tree
      const selectedIdx = newTree.size === 0 ? 0 : selected;
      newTree.setValAtIdx(val, selectedIdx);
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
      newTree.insert(val, selected, 'right');
      setCurrentTree(newTree);
      setOutput(val);
      setVal('');
    } catch (error) {
      setErrorText(produceErrorMessage(error));
    }
  }
  function handleDelete() {
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
      <h1 className="container-title">Binary Tree</h1>
      <button
        className="main-button btree-instructions"
        onClick={() => setViewInstructions(!viewInstructions)}
      >
        {viewInstructions ? 'Collapse Instructions' : 'view instructions'}
      </button>
      <p className="btree-instructions-paragraph">
        {!viewInstructions
          ? ''
          : 'Type a value and press enter or click set val to start a tree. clicking on a node to highlight it lets you press Backspace to delete it. You can set the left and right of a highlighted node with the set left and set right buttons. the generate random tree button generates a size 10 binary tree.'}
      </p>
      <div className="btree-fields">
        <div className="btree-input" style={{ display: 'flex', justifyContent: '' }}>
          <div className="btree-input1" style={bTreeInputDivStyles}>
            <h2 style={{ fontSize: '1.2rem' }}>Value:</h2>
            <label htmlFor="btree-val">
              <input
                type="text"
                placeholder="Enter Value"
                style={{ ...bTreeInputStyles, color: 'white' }}
                value={val}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChange={(e) => setVal(e.target.value)}
              />
            </label>
          </div>
          <div className="btree-input1" style={bTreeInputDivStyles}>
            <h2 style={{ fontSize: '1.2rem' }}>Index:</h2>
            <label htmlFor="btree-index">
              <input
                type="text"
                placeholder="Enter Index"
                style={{ ...bTreeInputStyles, color: 'white' }}
                value={String(selectedText)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChange={(e) => handleSelectedChange(e)}
              />
            </label>
          </div>
        </div>
        <div className="btree-buttons" style={bTreeButtonStyles}>
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
          <button className="main-button" onClick={() => setOutput(String(currentTree.getSize()))}>
            Size
          </button>
          <button className="main-button" onClick={() => handleRandomTree()}>
            Random Tree
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
        handleDelete={handleDelete}
        focused={focused}
      />
    </div>
  );
}
