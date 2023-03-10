import React, { useEffect, useState } from 'react';
import { BinaryTreeMaker, BinaryTreeNode } from 'utils/binaryTree-utils';
import { nodeStyleGenerator } from 'styles/btree-styles';
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
  parentSelect,
  setParentSelect,
  leftChild,
  setLeftChild,
  rightChild,
  setRightChild,
}: {
  currentTree: BinaryTreeMaker;
  setCurrentTree: (tree: BinaryTreeMaker) => void;
  idx: number;
  val: BinaryTreeNode;
  selected: number;
  setSelected: (s: number) => void;
  setOutput: (s: string) => void;
  parentSelect: number;
  leftChild: number;
  rightChild: number;
  setParentSelect: (s: number) => void;
  setLeftChild: (s: number) => void;
  setRightChild: (s: number) => void;
}) {
  const cellStyles: CSS.Properties = nodeStyleGenerator(
    selected,
    leftChild,
    rightChild,
    parentSelect,
    idx
  );
  function handleSelect() {
    if (selected === idx) {
      setSelected(-1);
      setOutput('');
      setParentSelect(-1);
      setLeftChild(-1);
      setRightChild(-1);
      return;
    }
    setSelected(idx);
    setOutput(currentTree.getVal(idx));
    setParentSelect(currentTree.getParentIdx(idx));
    setLeftChild(currentTree.getLeftChildIdx(idx));
    setRightChild(currentTree.getRightChildIdx(idx));
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
