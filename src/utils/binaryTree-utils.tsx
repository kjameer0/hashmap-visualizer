import { generateRandomArray } from './arr-utils';
export type BinaryTreeNode = string | null;
type leftOrRight = 'left' | 'right' | 'root';
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
    //if
    if (this.getVal(idx) === 'null') {
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
  //checks which node you want this to be a child of or if its the root of the tree
  insert(val: BinaryTreeNode, idx: number, spot: leftOrRight) {
    let positionOfNewNode;
    if (idx !== 0 && spot !== 'root') {
      if (this.getVal(idx) === 'null') {
        throw new Error('parent does not exist');
      }
    }
    if (spot === 'root') {
      positionOfNewNode = 0;
    } else if (spot === 'left') {
      positionOfNewNode = this.getLeftChildIdx(idx);
    } else {
      positionOfNewNode = this.getRightChildIdx(idx);
    }
    this.tree[positionOfNewNode] = val;
    this.size++;
  }
  //recursively
  delete(idx: number) {
    if (this.getLeftChildVal(idx) || this.getLeftChildVal(idx) === '') {
      this.delete(this.getLeftChildIdx(idx));
    }
    if (this.getRightChildVal(idx) || this.getRightChildVal(idx) === '') {
      this.delete(this.getRightChildIdx(idx));
    }
    this.tree[idx] = null;
    this.size--;
  }
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
export function makeRows(tree: BinaryTreeMaker = new BinaryTreeMaker(['1', '2', '3', '4', '5'])) {
  //each row is a div containing 2^row values from tree
  const size = tree.size;
  let pointer = 0;
  const grid = [];
  const numberOfRows = Math.ceil(getBaseLog(2, size));
  let nodesPerRow = 1;
  for (let i = 0; i <= numberOfRows; i++) {
    const cur = [] as BinaryTreeNode[];
    let numberOfNodes = 0;
    while (numberOfNodes < nodesPerRow) {
      cur.push(tree.getVal(pointer) || null);
      pointer++;
      numberOfNodes++;
    }
    nodesPerRow *= 2;
    grid.push(cur);
  }
  return grid;
}
