BinarySearchTree.prototype.findInOrderSuccessor = function(inputNode) {
  let currNode = inputNode;
  
  if (inputNode.left === null && inputNode.right === null) {
    while (currNode.key > currNode.parent.key) {
      currNode = currNode.parent       
    }  
    return currNode.parent;
  }
  
  currNode = currNode.right;
  while (currNode.left !== null) {
    currNode = currNode.left;
  }
  return currNode;
}