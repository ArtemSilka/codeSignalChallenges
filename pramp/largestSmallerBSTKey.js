BinarySearchTree.prototype.findLargestSmallerKey = function(num) {
// compare currNode value to the target value
// if target > curr >> check left child of the currNode
// if target < curr >> check right child of the currNode
// if child >> return
// compare child to curr 
//time space complexity analysis
  let currentNode = this.root,
      potentialMatch;
  
  while(currentNode !== null) {
    if (currentNode.key < num) {
        potentialMatch = currentNode;
        currentNode = currentNode.right;
    } else {
        potentialMatch = currentNode;
        currentNode = currentNode.left;
    }
  }
  
  return potentialMatch.key;
}