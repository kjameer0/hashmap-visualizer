import { generateRandomArray } from './arr-utils';
export type BinaryTreeNode = string | null;
type leftOrRight = 'left' | 'right' | 'root';
//array implementation of binary tree
export class BinaryTreeMaker {
  tree: BinaryTreeNode[];
  size: number;
  constructor(tree: BinaryTreeNode[]) {
    this.tree = tree;
    this.size = tree.length;
  }
  getSize() {
    return this.size;
  }
  getVal(idx: number) {
    return this.tree[idx];
  }
  getParentVal(idx: number) {
    return this.tree[Math.floor((idx - 1) / 2)];
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

    //make sure parent exists
    //if parent is 0 and 'root' we are cool
    // if parent is 0 and !'root' check
    //if parent does not exist return
    if (idx !== 0 && spot !== 'root') {
      if (!this.getVal(idx)) throw new Error('parent does not exist');
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
}

export function generateRandomBinaryTree(size: number) {
  const treeArray = generateRandomArray(size || 10);
  const tree = new BinaryTreeMaker(treeArray as BinaryTreeNode[]);
  return tree;
}
