import { BinaryTreeMaker, BinaryTreeNode, getBaseLog, makeRows } from 'utils/binaryTree-utils';
import BinaryTreeVisNode from './BinaryTreeVisNode';
const gridStyles = {
  display: 'grid',
  border: '1px solid white',
  //width: '90vw',
};
const rowStyles = {
  display: 'flex',
  justifyContent: 'space-evenly',
  border: '1px solid blue',
};

export default function BinaryTreeDisplay({
  currentTree,
  setCurrentTree,
}: {
  currentTree: BinaryTreeMaker;
  setCurrentTree: (tree: BinaryTreeMaker) => void;
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
                  currentTree={currentTree}
                  setCurrentTree={setCurrentTree}
                  idx={index + idx - 1}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}


