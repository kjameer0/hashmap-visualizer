import { BinaryTreeMaker, BinaryTreeNode, getBaseLog, makeRows } from 'utils/binaryTree-utils';
import BinaryTreeVisNode from './BinaryTreeVisNode';
import * as CSS from 'csstype';
import { useState } from 'react';
const gridStyles: CSS.Properties = {
  display: 'flex',
  border: '0px solid white',
  width: '100%',
  //overflow: 'scroll',
  flexWrap: 'wrap',
  //backgroundColor: 'navy',
  //width: '90vw',
};
const rowStyles = {
  display: 'flex',
  justifyContent: 'space-evenly',
  border: '1px solid blue',
  width: '100%',
  // paddingLeft: '20%',
  // paddingRight: '20%',
};

export default function BinaryTreeDisplay({
  currentTree,
  setCurrentTree,
  selected,
  setSelected,
  setOutput,
}: {
  currentTree: BinaryTreeMaker;
  setCurrentTree: (tree: BinaryTreeMaker) => void;
  selected: number;
  setSelected: (a: number) => void;
  setOutput: (a: string) => void;
}) {
  console.log(makeRows(currentTree));
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
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}


