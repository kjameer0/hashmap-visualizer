import { BinaryTreeMaker, BinaryTreeNode } from 'utils/binaryTree-utils';
import * as CSS from 'csstype';
const cellStyles: CSS.Properties = {
  display: 'flex',
  justifyContent: 'center',
  border: '1px solid red',
  borderRadius: '50%',
  padding: '1%',
  margin: '1% auto',
  overflow: 'hidden',
};
const cellPStyles: CSS.Properties = {
  textAlign: 'center',
  fontSize: '1.2rem',
};
export default function BinaryTreeVisNode({
  currentTree,
  setCurrentTree,
  idx,
  val,
}: {
  currentTree: BinaryTreeMaker;
  setCurrentTree: (tree: BinaryTreeMaker) => void;
  idx: number;
  val: BinaryTreeNode;
}) {
  return (
    <button style={{ ...cellStyles, visibility: val === 'null' ? 'hidden' : 'visible' }}>
      <p style={cellPStyles}>{val}</p>
    </button>
  );
}
