import { useEffect, useState } from 'react';
//helpers
import { BinaryTreeMaker, BinaryTreeNode, getBaseLog, makeRows } from 'utils/binaryTree-utils';
//components
import BinaryTreeVisNode from './BinaryTreeVisNode';
//styles
import * as CSS from 'csstype';
const gridStyles: CSS.Properties = {
  display: 'flex',
  border: '0px solid white',
  width: '100%',
  flexWrap: 'wrap',
};
const rowStyles: CSS.Properties = {
  display: 'flex',
  //flex: '1',
  flexBasis: '100%',
  flexGrow: '6',
  justifyContent: 'space-evenly',
  border: '0px solid blue',

  overflowX: 'auto',
};

export default function BinaryTreeDisplay({
  currentTree,
  setCurrentTree,
  selected,
  setSelected,
  setOutput,
  parentSelect,
  setParentSelect,
  leftChild,
  setLeftChild,
  rightChild,
  setRightChild,
  handleDelete,
  focused,
}: {
  currentTree: BinaryTreeMaker;
  setCurrentTree: (tree: BinaryTreeMaker) => void;
  selected: number | null;
  setSelected: (a: number) => void;
  setOutput: (a: string) => void;
  parentSelect: number;
  leftChild: number;
  rightChild: number;
  setParentSelect: (s: number) => void;
  setLeftChild: (s: number) => void;
  setRightChild: (s: number) => void;
  handleDelete: () => void;
  focused: boolean;
}) {
  return (
    <div className="btree-grid" style={gridStyles}>
      {makeRows(currentTree).map((e, idx) => {
        return (
          <div key={idx} style={{ ...rowStyles }}>
            {e.map((node, index) => {
              return (
                <BinaryTreeVisNode
                  key={index}
                  val={node || 'null'}
                  setSelected={setSelected}
                  selected={selected}
                  currentTree={currentTree}
                  setCurrentTree={setCurrentTree}
                  setOutput={setOutput}
                  idx={index + 2 ** idx - 1}
                  parentSelect={parentSelect}
                  setParentSelect={setParentSelect}
                  leftChild={leftChild}
                  setLeftChild={setLeftChild}
                  rightChild={rightChild}
                  setRightChild={setRightChild}
                  handleDelete={handleDelete}
                  focused={focused}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
