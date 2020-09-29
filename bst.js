const BinarySeachTree = require('./BinarySearchTree');
const BinaryTree = require('./BinaryTree');


function createBST(array) {
  const BST = new BinarySeachTree();
  for (let i = 0; i < array.length; ++i) {
    BST.insert(array[i], 1);
  }
  return BST;
}

let numArray = [3, 1, 4, 6, 9, 2, 5, 7, 8, 9];
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

function calcHeightOfTreeBetter(tree) {
  if (!tree) {
    return 0;
  }

  let leftHeight = 1 + calcHeightOfTreeBetter(tree.left);
  let rightHeight = 1 + calcHeightOfTreeBetter(tree.right);

  if (leftHeight > rightHeight) {
    return leftHeight;
  } else {
    return rightHeight;
  }
}

// console.log(calculateTreeHeight(new BinarySeachTree()));
// console.log(calculateTreeHeight(newBST));
// console.log(calcHeightOfTreeBetter(newBST));
// console.log(calcHeightOfTreeBetter(new BinarySeachTree(9)));

const bigOlBST = createBST([0, 1, 2, 3, 4, 5, 6, 7]);
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

const justAnotherBST = createBST([1, 0, 2, 3, 2, 3]);
// console.log(justAnotherBST);
const simpleBST = createBST([1, 0, 2]);

// k sooooo this one aint workin
// function findThirdLargest(tree) {
//   if (!tree.right) {
//     if (tree.key === tree.parent.key) {}
//     //return tree.parent.left.key;
//   }
//   return findThirdLargest(tree.right);
// }

// console.log(findThirdLargest(simpleBST));
// console.log(findThirdLargest(justAnotherBST));

// this one is a little too strict, but almost there
function checkIfBalanced(tree) {
  if (tree.right && tree.left) {
    if (((!tree.right.right && !tree.right.left) && (tree.left.left || tree.left.right)) ||
      ((!tree.left.left && tree.left.right) && (tree.right.right || tree.right.left))) {
      return false;
    }
    return checkIfBalanced(tree.right) && checkIfBalanced(tree.left);
  }
  else if (!tree.right && tree.left) {
    if (tree.left.right || tree.left.left) {
      return false;
    }
    return checkIfBalanced(tree.left);
  }
  else if (!tree.left && tree.right) {
    if (tree.right.right || tree.right.left) {
      return false;
    }
    return checkIfBalanced(tree.right);
  }
  else return true;
}

console.log('should be false: ', checkIfBalanced(BST));
console.log('should be false: ', checkIfBalanced(newBST));
console.log('should be true: ', checkIfBalanced(simpleBST));
console.log('should be false: ', checkIfBalanced(justAnotherBST));
console.log('should be true: ', checkIfBalanced(createBST([5, 3, 7, 2, 4, 6, 8])));
console.log('should be true: ', checkIfBalanced(createBST([5, 3, 7, 2, 4, 6, 8, 9])));
console.log('should be false: ', checkIfBalanced(createBST([5, 3, 7, 2, 4, 6, 8, 9, 0])));

/*
function calcHeightOfTreeBetter(tree) {
  if (!tree) {
    return 0;
  }

  let leftHeight = 1 + calcHeightOfTreeBetter(tree.left);
  let rightHeight = 1 + calcHeightOfTreeBetter(tree.right);

  if (leftHeight > rightHeight) {
    return leftHeight;
  } else {
    return rightHeight;
  }
}
*/