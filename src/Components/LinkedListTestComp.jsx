import React from 'react'

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class myLinkedList {
    constructor() {
        this.head = null
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0
    }

    prepend(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        } else {
            node.next =  this.head;
            this.head = node;
        }
        this.size++
    }

    append(value) {
        let node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        } else {
            let lastNode = this.head
            while(lastNode.next) {
                lastNode = lastNode.next
            }
            lastNode.next = node
        }
        this.size++
    }

    insert(value, index) {
        let node = new Node(value)
        if(this.size === 0 || index < 0 || index > this.size) {
            return;
        }
        if(index === 0) {
            this.prepend(value)
        } else {
            let prevNode =  this.head;
            for(let i = 0; i<index-1; i++ ) {
                prevNode = prevNode.next
            }
            const nextNode = prevNode.next
            prevNode.next = node
            node.next = nextNode
        }
        this.size++
    }

    remove(index) {
        if(this.size === 0 || index < 0 || index > this.size) {
            return;
        }
        let removedNode = null;
        if(index === 0) {
            removedNode = this.head
            this.head = this.head.next
        } else {
            let prevNode =  this.head;
            for(let i = 0; i<index-1; i++ ) {
                prevNode = prevNode.next
            }
            removedNode = prevNode.next
            prevNode.next = removedNode.next
        }
        this.size--
        return removedNode
    }

    removeByValue(value) {
        if(this.size === 0) {
            return;
        }
        let removedNode = null;
        if(this.head.value === value) {
            removedNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head;
            while(prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if(prev.next) {
                removedNode = prev.next
                prev.next = removedNode.next
            }
        }
        this.size--
        return removedNode
    }

    reverse() {
        let curr = this.head;
        let prev = null
        while(curr.next) {
            let nexNode = curr.next;
            curr.next = prev
            prev = curr
            curr = nexNode
        }
        curr.next = prev
        this.head = curr
    }


    print() {
        let node= this.head
        let res = ''
        while(node) {
            res += node.value + "-->"
            node = node.next
        }
        console.log(res)
    }
}

function LinkedListTestComp() {
    const l = new myLinkedList()
    l.prepend(30)
    l.prepend(20)
    l.prepend(10)
    l.append(40)
    l.prepend(5)
    l.append(50)
    l.insert(70, 6)
    l.insert(15, 2)
    // l.remove(1)
    // l.removeByValue(50)
    l.print()
    l.reverse()
    l.print()
    

  return (
    <div>LinkedListTestComp</div>
  )
}

export default LinkedListTestComp


class LinkedListWithTail {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    prepend(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    removeAtFront() {
        if(this.size < 2) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next
        }
        this.size--
    }

    removeAtEnd() {
        if(this.size < 2) {
            this.head = null;
            this.tail = null;
        } else {
            let prev = this.head
            while(prev.next !== this.tail) {
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
    }
}

export const LinkedListTestWithTailComp = () => {
   const linkedListWithTail = new LinkedListWithTail()

   linkedListWithTail.prepend(10)
   linkedListWithTail.prepend(20)
   linkedListWithTail.prepend(30)
   linkedListWithTail.append(40)

   linkedListWithTail.removeAtEnd()
   console.log(linkedListWithTail)
    
  return (
    <div>LinkedListTestWithTailComp</div>
  )
}


class DoublyNode {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    prepend(value) {
        const node = new DoublyNode(value)

        if(this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head.prev = node
            this.head = node
        }

        this.size++
    }

    append(value) {
        const node = new DoublyNode(value)

        if(this.isEmpty()) {
            this.head = node
        } else {
            let curr = this.head;

            while(curr.next) {
                curr = curr.next
            }

            curr.next = node;
            node.prev = curr;
        }

        this.size++
    }

    insertAt(value, index) {
        if(index < 0 || index > this.size) {
            return
        } else if(index == 0) {
            this.prepend(value)
            this.size++
            return
        } else if(index == this.size) {
            this.append(value)
            this.size++
            return
        } else {
            const node = new DoublyNode(value)

            let curr = this.head

            for(let i =0; i< index -1; i++) {
                curr = curr.next
            }
            const nextNode = curr.next

            curr.next = node
            node.prev = curr
            node.next = nextNode

            nextNode.prev = node
        }
        this.size++
    }

    removeAtFront() {
        if(this.isEmpty()) {
            return 
        }
        this.head = this.head.next
        this.head.prev = null

        this.size--
    }

    removeAtEnd() {
        if(this.isEmpty()) {
            return
        }

        if(!this.head.next) {
            this.head = null
            return
        }

        let curr = this.head;
        while(curr.next.next) {
            curr = curr.next
        }
        curr.next = null

        this.size--
    }

    removeAt(index) {
        if(this.isEmpty()) {
            return
        }
        if(index == 0) {
            this.removeAtFront()
            this.size--
            return
        }
        if(index == this.size) {
            this.removeAtEnd()
            this.size--
            return
        }

        let curr = this.head;
        for(let i = 0; i<index - 1; i++) {
            curr = curr.next
        }
        curr.next = curr.next.next
        
        //now we assigned curr.next to curr.next.next in above statement, now now next will point to curr.next point to index + 1 node.
        // curr.next.next.prev = curr // this will be wrong

        curr.next.prev = curr

        this.size--
    }

    print() {
        let curr = this.head
        let str = ''
        while(curr) {
            str = str + curr.value + " -->"
            curr = curr.next
        }
        console.log(str)
    }
}

export function DoublyLinkedListComp() {
    const doublyLinkedList = new DoublyLinkedList()
    doublyLinkedList.append(20)
    doublyLinkedList.append(30)
    doublyLinkedList.append(40)
    doublyLinkedList.prepend(5)
    doublyLinkedList.prepend(1)
    doublyLinkedList.insertAt(15, 2)

    doublyLinkedList.removeAtFront()
    doublyLinkedList.removeAtEnd()
    doublyLinkedList.removeAt(2)

    doublyLinkedList.print()
    console.log(doublyLinkedList)


    return (
        <div>DoublyLinkedListComp</div>
    )
}


class CircularLinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size == 0
    }

    append(value) {
        const newNode = new Node(value)

        if(this.isEmpty()) {
            this.head = newNode
            newNode.next = this.head

            this.size++
            return;
        }
        
        let curr = this.head
        while(curr.next !== this.head) {
            curr = curr.next
        }
        curr.next = newNode
        newNode.next = this.head

        this.size++
    }

    prepend(value) {
         const newNode = new Node(value)

        if(this.isEmpty()) {
            this.head = newNode
            newNode.next = this.head

            this.size++
            return
        }

        let lastNode = this.head;
        while(lastNode.next !== this.head) {
            lastNode = lastNode.next
        }

        lastNode.next = newNode
        newNode.next = this.head
        this.head = newNode

        this.size++
    }

    print() {
        if (!this.head) return;

        let str = ''

        let curr = this.head 
        do {
            str = str + curr.value + "-->"
            curr = curr.next
        } while(curr !== this.head)

        console.log(str)
    }

    removeAtFront() {
        if(this.isEmpty()) {
            return
        }

        if(this.head.next == this.head) {
            this.head = null
            this.size--
            return
        }

        let curr = this.head

        while (curr.next !== this.head) {
            curr = curr.next
        }
       
        // Make last node point to second node
        curr.next = this.head.next

        this.head = this.head.next
        this.size--
    }

    removeAtEnd() {
        if(this.isEmpty()) {
            return
        }

        if(this.head.next == this.head) {
            this.head = null
            this.size--
            return
        }

        let curr = this.head

        while (curr.next.next !== this.head) {
            curr = curr.next
        }

        curr.next = this.head
        this.size--
    }

    removeAt(index) {
        if(this.isEmpty() || index >= this.size) {
            return
        }

        if(index === 0) {
            this.removeAtFront()
            this.size--
            return
        }

        if(index == this.size) {
            this.removeAtEnd()
            this.size--
            return
        }

        let curr = this.head
        for(let i =0; i<index -1 ; i++) {
            curr = curr.next
        }

        curr.next = curr.next.next

        this.size--
    }
}

export function CircularLinkedListComp() {
    const circularLinkedList = new CircularLinkedList()
    circularLinkedList.append(20)
    circularLinkedList.append(30)
    circularLinkedList.append(40)
    circularLinkedList.prepend(15)
    circularLinkedList.prepend(10)
    circularLinkedList.removeAtEnd()
    circularLinkedList.removeAtFront()

    circularLinkedList.removeAt(2)


    circularLinkedList.print()
    console.log(circularLinkedList)

  return (
    <div>CircularLinkedListComp</div>
  )
}


// 1,2,3,4,5

// index = 0
// cuu = 2

// index = 1
// cuu = 3
