import { BinaryTreeMaker, BinaryTreeNode, getBaseLog, makeRows } from 'utils/binaryTree-utils';
const gridStyles = {
  display: 'grid',
  border: '1px solid red',
};
const cellStyles = {
  border: '1px solid red',
  margin: '1% 2%',
};
export default function BinaryTreeDisplay({ currentTree }: { currentTree: BinaryTreeMaker }) {
  console.log(makeRows(currentTree));
  return (
    <div className="btree-grid" style={gridStyles}>
      {makeRows(currentTree).map((e, idx) => {
        return (
          <div key={idx} style={{ display: 'flex', justifyContent: 'center' }}>
            {e.map((node, index) => {
              return (
                <button
                  style={{
                    ...cellStyles,
                    margin: `1% ${idx * 0.5}px`,
                  }}
                  key={index + 2 ** idx - 1}
                >
                  {node || 'null'}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

{
  /* {currentTree.tree.map((e, index) => {
  return (
    <span style={cellStyles} key={index}>
      {e}
    </span>
  );
})} */
}
