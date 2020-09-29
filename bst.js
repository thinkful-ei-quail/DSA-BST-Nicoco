const BinarySeachTree = require('./BinarySearchTree');
const BinaryTree = require('./BinaryTree');


function createBST(array) {
  const BST = new BinarySeachTree();
  for (let i = 0; i < array.length; ++i) {
    BST.insert(array[i], 1);
  }
  return BST;
}

let numArray = [3, 1, 4, 6, 9, 2, 5, 7];
let BST = createBST(numArray);
// console.log(BST);

let lettersArray = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N'];
let newBST = createBST(lettersArray);
// console.log(newBST);

function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}

// console.log(tree(new BinarySeachTree()));
// console.log(tree(newBST));

function calculateTreeHeight(tree, ticker = 0) {
  if (!tree) {
    return ticker;
  }
  ticker++;
  if (calculateTreeHeight(tree.right, ticker) >= calculateTreeHeight(tree.left, ticker)) {
    return calculateTreeHeight(tree.right, ticker);
  } else {
    return calculateTreeHeight(tree.left, ticker);
  }
}

// console.log(calculateTreeHeight(new BinarySeachTree()));
// console.log(calculateTreeHeight(newBST));

const bigOlBST = createBST([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(calculateTreeHeight(bigOlBST));

function checkIfIsBST(tree) {
  // base case
  if (tree.right && tree.left) {
    if (tree.right.key < tree.key || tree.left.key > tree.key) {
      return false;
    }
    return checkIfIsBST(tree.right) && checkIfIsBST(tree.left);
  }

  else if (!tree.left && tree.right) {
    if (tree.right.key < tree.key) {
      return false;
    }
    return checkIfIsBST(tree.right);
  }

  else if (!tree.right && tree.left) {
    if (tree.left.key > tree.key) {
      return false;
    }
    return checkIfIsBST(tree.left);
  }

  else if (!tree.right && !tree.left) {
    return true;
  }
}

// console.log('should be true: ', checkIfIsBST(bigOlBST));
// console.log('should be true: ', checkIfIsBST(new BinarySeachTree()));

function createBinaryTree(array) {
  const BT = new BinaryTree();
  for (let i = 0; i < array.length; ++i) {
    BT.insert(array[i], 1);
  }
  return BT;
}

// const BT = createBinaryTree(numArray);
// console.log('should be false: ', checkIfIsBST(BT));

// const anotherBinaryTree = createBinaryTree([0, 1]);
// console.log('should be false: ', checkIfIsBST(anotherBinaryTree));
// const anotherBST = createBST([0, 1]);
// console.log('should be true: ', checkIfIsBST(anotherBST));

function findThirdLargestNode(tree) {

}