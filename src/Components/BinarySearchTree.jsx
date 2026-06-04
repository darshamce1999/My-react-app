import React from 'react'

// https://youtu.be/c-LEpmYikFY?si=cwr_hV18TP7lfYLt
// https://youtu.be/P37BpJyM2sI?si=aBL6Fj7XTMC69LLy
// https://chatgpt.com/share/69932339-34c4-8010-a6e6-1c678a865020
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearch {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insertNode(node, parent) {
        if(node.value < parent.value) {
            if(parent.left == null) {
                parent.left = node
            } else {
                this.insertNode(node, parent.left)
            }
        } else {
            if(parent.right == null) {
                parent.right = node
            } else {
                this.insertNode(node, parent.right)
            }
        }
    }

    insert(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.root = node
        } else {
            this.insertNode(node, this.root)
        }
    }

    search(value, root = this.root) {
        if(root === null) {
            return false;
        } else {
            if(value === root.value) {
                return true
            } else if(value < root.value) {
                return this.search(value, root.left)
            } else {
                return this.search(value, root.right)
            }
        }
    }

    //analyse diagram https://www.geeksforgeeks.org/dsa/tree-traversals-inorder-preorder-and-postorder/
    //https://youtu.be/n6_Ruq1qvjU?si=BQRdBk9zskxDuCNk
    preOrder(root = this.root) {
        if(root === null) {
            return null
        } else {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root = this.root) {
        if(root === null) {
            return null;
        } else {
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postorder(root = this.root) {
        if (!root) return;

        this.postorder(root.left);
        this.postorder(root.right);
        console.log(root.value);
    }

    //The left most leaf is smaller one in binary search tree
    min(root = this.root) {
        if(root == null) {
            return undefined
        }
        if(root.left === null) {
            console.log(root.value)
            // return root.value
        } else {
            return this.min(root.left)
        }
    }

    //The right most leaf is largest one in binary search tree
    max(root = this.root) {
        if(root == null) {
            return undefined
        }
        if(root.right === null) {
            console.log(root.value)
        } else {
            return this.max(root.right)
        }
    }

    //https://www.wscubetech.com/resources/dsa/dfs-vs-bfs
    //https://youtu.be/H0i3gk1h0lI?si=-rbWaLEgmKkOUf8T
    bfs(root = this.root) {
        if(!root) {
            return null
        }
        let queue = [root]
        while(queue.length > 0) {
            const node = queue.shift()
            console.log(node.value)
            if(node.left) {
                queue.push(node.left)
            }
            if(node.right) {
                queue.push(node.right)
            }
        }
    }

    getHeight(root = this.root) {
        if (root === null) return 0

        const leftHeight = this.getHeight(root.left)
        const rightHeight = this.getHeight(root.right)

        return 1 + Math.max(leftHeight, rightHeight)
    }

    getTotalNode(root = this.root) {
        if (root === null) return 0

        return 1 + this.getTotalNode(root.left) + this.getTotalNode(root.right)
    }

    getTotalValue(root = this.root) {
        if (root === null) return 0
        
        return root.value + this.getTotalValue(root.left) + this.getTotalValue(root.right)
    }

    isBothSame(tree1, tree2) {
        if(tree1 === null || tree2 === null) {
            return tree1 === tree2
        }

        if(tree1.value != tree2.value) {
            return false
        }

        return this.isBothSame(tree1.left, tree2.left) && this.isBothSame(tree1.right, tree2.right)
    }

    isSubTree(tree, subTree) {
        if(tree === null || subTree === null) {
            return tree === subTree
        }

        if(this.isBothSame(tree, subTree)) {
            return true
        }

        return this.isSubTree(tree.left, subTree) || this.isSubTree(tree.right, subTree)
    }

    allPossiblePath(node = this.root) {
        const res = []
        if(this.root = null) {
            return res
        }

        function bfs(node, state) {
            if(node.left == null && node.right == null) {
                return res.push(state.join("->"))
            }

            if(node.left) {
                state.push(node.left.value)
                bfs(node.left, state)
                state.pop()
            }

            if(node.right) {
                state.push(node.right.value)
                bfs(node.right, state)
                state.pop()
            }
        }

        bfs(node, [node.value])

        return res
    }

    kThSmallestNo(node, k, level=0) {
        let result = null;

        function dfs(node) {
            if(node == null) {
                return
            }

            dfs(node.left)

            level++

            if(level == k) {
                result = node.value
                return;
            }

            dfs(node.right)
        }

        dfs(node)

        return result
    }
}

function BinarySearchTree() {

    // const binarySearchTree = new BinarySearch()
    // binarySearchTree.insert(10)
    // binarySearchTree.insert(5)
    // binarySearchTree.insert(15)
    // binarySearchTree.insert(3)
    // binarySearchTree.insert(7)
    // binarySearchTree.insert(16)
    // binarySearchTree.insert(4)
    // binarySearchTree.insert(6)
    // binarySearchTree.insert(9)

    // console.log(binarySearchTree.search(11))
    // binarySearchTree.inOrder()
    // console.warn("a")
    // console.log(binarySearchTree.getTotalValue())

    // binarySearchTree.min()
    // binarySearchTree.max()

    // console.log(binarySearchTree)

    // const binarySearchTree2 = new BinarySearch()
    // binarySearchTree2.insert(10)
    // binarySearchTree2.insert(5)
    // binarySearchTree2.insert(15)
    // binarySearchTree2.insert(3)
    // binarySearchTree2.insert(7)
    // binarySearchTree2.insert(16)

    // console.log(binarySearchTree2.isBothSame(binarySearchTree.root, binarySearchTree2.root))

    const binarySearchTree3 = new BinarySearch()
    binarySearchTree3.insert(10)
    binarySearchTree3.insert(5)
    binarySearchTree3.insert(20)
    binarySearchTree3.insert(3)
    binarySearchTree3.insert(7)
    // binarySearchTree3.insert(1)

    const binarySearchTree4 = new BinarySearch()
    binarySearchTree4.insert(5)
    binarySearchTree4.insert(3)
    binarySearchTree4.insert(7)

    // console.log(binarySearchTree3.isSubTree(binarySearchTree3.root, binarySearchTree4.root))

    // console.log(binarySearchTree3.allPossiblePath())
    
    console.log(binarySearchTree3.kThSmallestNo(binarySearchTree3.root, 3, 0))

     console.log(binarySearchTree3)

  return (
    <div>BinarySearchTree</div>
  )
}

export default BinarySearchTree