import { sum } from 'utils/sum';
import { BinaryTreeNode, BinaryTreeMaker, generateRandomBinaryTree } from 'utils/binaryTree-utils';

test('check if tree can be made', () => {
  const newTree = new BinaryTreeMaker([]);
  newTree.insert('2', 0, 'root');
  expect(newTree.size).toBe(1);
  expect(newTree.tree[0]).toBe('2');
});

test('check if multiple inserts give correct array tree', () => {
  const newTree = new BinaryTreeMaker(['2', '3', '4', '5', '6']);
  expect(newTree.tree[0]).toBe('2');
  expect(newTree.tree[1]).toBe('3');
  expect(newTree.tree[2]).toBe('4');
  expect(newTree.tree[3]).toBe('5');
  expect(newTree.tree[4]).toBe('6');
});

test('check if delete removes children', () => {
  const newTree = new BinaryTreeMaker(['2', '3', '4', '5', '6']);
  newTree.delete(0);
  //loop current tree and make sure all children are null
  newTree.tree.forEach((e) => expect(e).toBe(null));
  expect(newTree.size).toBe(0);
});

//check if insertion works on node with no parent
test('check if node insertion fails if no parent', () => {
  const newTree = new BinaryTreeMaker(['2', '3', '4', null, '6']);
  expect(() => newTree.insert('10', 3, 'left')).toThrow('parent does not exist');
  newTree.insert('10',newTree.getParentIdx(3), 'left');
  expect(newTree.getVal(3)).toBe('10')
});
