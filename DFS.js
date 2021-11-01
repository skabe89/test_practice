const BinaryTree = require('./binaryTree.js')

exports.DFS = () => {
  let bt = new BinaryTree
  bt.insert(1)
  bt.insert(2)
  bt.insert(3)
  return bt
}