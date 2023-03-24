import { BinaryTreeMaker, BinaryTreeNode } from 'utils/binaryTree-utils';
import { nodeStyleGenerator } from 'styles/btree-styles';
import * as CSS from 'csstype';
import { produceErrorMessage } from 'utils/arr-utils';

const cellPStyles: CSS.Properties = {
  textAlign: 'center',
  fontSize: '1.2rem',
  width: '1.2rem',
  border: '0px solid white',
};
export default function BinaryTreeVisNode({
  currentTree,
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
  handleDelete,
  focused,
}: {
  currentTree: BinaryTreeMaker;
  idx: number;
  val: BinaryTreeNode;
  selected: number | null;
  setSelected: (s: number) => void;
  setOutput: (s: string) => void;
  parentSelect: number;
  leftChild: number;
  rightChild: number;
  setParentSelect: (s: number) => void;
  setLeftChild: (s: number) => void;
  setRightChild: (s: number) => void;
  handleDelete: () => void;
  focused: boolean;
}) {
  const cellStyles: CSS.Properties = nodeStyleGenerator(
    selected,
    leftChild,
    rightChild,
    parentSelect,
    idx
  );
  function handleKeyPress(e: React.KeyboardEvent<HTMLButtonElement>) {
    try {
      if (selected !== idx) return;
      if (!focused && e.key === 'Backspace') handleDelete();
    } catch (error) {
      produceErrorMessage(error);
    }
  }

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
      onKeyDown={(e) => handleKeyPress(e)}
    >
      <p style={cellPStyles}>{val === 'null' ? idx : val}</p>
    </button>
  );
}
