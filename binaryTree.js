class Node{
  constructor(val){
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinaryTree{
  constructor(){
    this.root = null
  }

  insert(val){
    let node = new Node(val)

    if(!this.root){
      this.root = node
      return this
    }
    else{

      let curr = this.root
      let inserted = false

      while(!inserted){
        if(node.val === curr.val) return undefined
        if(node.val > curr.val){
          if(!curr.right){
            curr.right = node
            inserted = true
            return this
          }
          curr = curr.right
        }
        if(node.val < curr.val){
          if(curr.left === null){
            curr.left = node
            inserted = true
            return this
          }
          curr = curr.left
        }
      }

    }
  }
}

let bt = new BinaryTree

bt.insert(17)
bt.insert(5)
bt.insert(76)
bt.insert(41)
bt.insert(23)
bt.insert(3)
bt.insert(44)
bt.insert(27)

module.exports = BinaryTree