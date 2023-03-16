import { generateRandomArray } from './arr-utils';
export type BinaryTreeNode = string | null;
type leftOrRight = 'left' | 'right';
//array implementation of binary tree
export class BinaryTreeMaker {
  tree: BinaryTreeNode[];
  size: number;
  constructor(tree: BinaryTreeNode[]) {
    this.tree = tree;
    const startSize = this.calculateSize();
    this.size = startSize;
  }
  //count all non null values in the tree
  calculateSize() {
    //loop tree and find non null values
    let size = 0;
    this.tree.forEach((e) => {
      if (!e || e === 'null') return;
      size++;
    });
    return size;
  }
  //total number of non null nodes
  getSize() {
    return this.size;
  }
  //find value at given index in array
  getVal(idx: number) {
    return this.tree[idx] || 'null';
  }
  //get value of parent node
  getParentVal(idx: number) {
    return this.tree[Math.floor((idx - 1) / 2)];
  }
  //sets value at given idx if parent is not null
  setValAtIdx(val: string | null, idx: number | null) {
    //no index number means no spot to set value
    if (idx === null) return;
    //if setting a value to null, delete every child node
    //to preserve tree structure
    if (val === 'null') {
      this.delete(idx);
    }
    //if added val is not null and current val is null add 1 to size
    if (this.getVal(idx) === 'null' && val !== 'null') {
      this.size++;
    }
    this.tree[idx] = val;
  }
  getLeftChildVal(idx: number) {
    return this.tree[Math.floor(idx * 2 + 1)];
  }
  getRightChildVal(idx: number) {
    return this.tree[Math.floor(idx * 2 + 2)];
  }
  getParentIdx(idx: number) {
    return Math.floor((idx - 1) / 2);
  }
  getLeftChildIdx(idx: number) {
    return Math.floor(idx * 2 + 1);
  }
  getRightChildIdx(idx: number) {
    return Math.floor(idx * 2 + 2);
  }
  //checks which node you want this to be a child of and if its going
  // to node.left or node.right
  insert(val: BinaryTreeNode, idx: number, spot: leftOrRight) {
    let positionOfNewNode;
    //choose correct index if new node is on left or right
    console.log(this.tree);
    if (spot === 'left') {
      positionOfNewNode = this.getLeftChildIdx(idx);
      console.log(positionOfNewNode);
    } else {
      console.log('hi');
      positionOfNewNode = this.getRightChildIdx(idx);
    }
    if (val === 'null') {
      this.delete(positionOfNewNode);
    }
    this.tree[positionOfNewNode] = val;
  }
  //recursively check if left and right sbtrees have vals, and delete them
  delete(idx: number) {
    if (this.getLeftChildVal(idx) && this.getLeftChildVal(idx) !== 'null') {
      this.delete(this.getLeftChildIdx(idx));
    }
    if (this.getRightChildVal(idx) && this.getRightChildVal(idx) !== 'null') {
      this.delete(this.getRightChildIdx(idx));
    }
    //reduce size of tree if the current node has a value
    if (this.getVal(idx) !== 'null') {
      this.size--;
    }
    this.tree[idx] = 'null';
  }
  //how many rows need to be generated to make the tree look like a binary tree
  numRows() {
    return Math.ceil(getBaseLog(2, this.size));
  }
}
export function generateRandomBinaryTree(size: number) {
  const treeArray = generateRandomArray(size || 10);
  const tree = new BinaryTreeMaker(treeArray as BinaryTreeNode[]);
  return tree;
}
export function getBaseLog(x: number, y: number) {
  return Math.log(y) / Math.log(x);
}
//return array of arrays that contain the values that would be in each level
//of a btree
export function makeRows(tree: BinaryTreeMaker = new BinaryTreeMaker(['1', '2', '3', '4', '5'])) {
  //each row is a div containing 2^row values from tree
  const size = tree.size;
  //pointer saves current position of element from tree to add to row
  let pointer = 0;
  //grid contains all of the arrays that store vals in every row
  const grid = [];
  const numberOfRows = Math.ceil(getBaseLog(2, size));
  //the first row will have one node
  let nodesPerRow = 1;
  //go through each row we are creating
  for (let i = 0; i <= numberOfRows; i++) {
    //create new row for values in current row
    const currentRow = [] as BinaryTreeNode[];
    let numberOfNodes = 0;
    //keep adding values from tree to current row til its been filled
    while (numberOfNodes < nodesPerRow) {
      currentRow.push(tree.getVal(pointer) || null);
      pointer++;
      numberOfNodes++;
    }
    //increase nodes per row to reflect net row size in tree
    nodesPerRow *= 2;
    grid.push(currentRow);
  }
  return grid;
}
