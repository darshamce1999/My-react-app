import React from "react"

class myQueue {
  constructor() {
    this.list = []
  }

  enqueue(value) {
    this.list.push(value)
  }

  dequeue() {
    return this.list.shift()
  }

  peek() {
    return this.list[0]
  }

  print() {
    console.log(this.list)
  }
}

export function Queue() {

  const queue = new myQueue()
  queue.enqueue(10)
  queue.enqueue(20)
  queue.enqueue(30)
  queue.print()

  queue.dequeue()
  queue.print()

  console.log(queue.peek())


  return (
    <div>Queue</div>
  )
}


class objQueue {
  constructor() {
    this.list = {}
    this.first = 0
    this.last = 0
  }

  enQueue(value) {
    this.list[this.last] = value;
    this.last ++ 
  }

  deQueue() {
    delete this.list[this.first]
    this.first++
  }

  peek() {
    return this.list[this.first]
  }

  print() {
    console.log(this.list)
  }
}

//if u use array and if use shift, it add more time, to make optimised using custom logic
export const QueueWithObject = () => {

  const queue = new objQueue()
  queue.enQueue(10)
  queue.enQueue(20)
  queue.enQueue(30)
  queue.enQueue(40)
  queue.print()

  queue.deQueue()
  queue.print()

  queue.deQueue()
  queue.print()

  console.log(queue.peek())

  return (
    <div>Queue</div>
  )
}
export default Queue


class myCircularQueue {

  constructor(size) {
    this.size = size
    this.list = new Array(size)
    this.front = -1
    this.rear = -1
    this.count = 0
  }

  isFull() {
    return this.count === this.size
  }

  isEmpty() {
    return this.count === 0
  }

  enQueue(value) {
    if(this.isFull()) {
      return
    }
    
    this.rear = (this.rear + 1) % this.size

    this.list[this.rear] = value
    this.count++

    if(this.front == -1) {
      this.front = this.rear
    } 
  }

  deQueue() {
    if(this.isEmpty()) {
      return;
    }

    this.list[this.front] = null
    this.front = (this.front + 1) % this.size
    this.count--

    //if we remove all elements and if its empty we will set to -1 to start queue from fresh begining.
    if(this.isEmpty()) {
      this.front = -1
      this.rear = -1
    }
  }

  peek() {
    if(!this.isEmpty()) {
      console.log(this.list[this.front])
    }
  }

  print() {
    console.log(this.list)
  }

}

export const CircularQueue = () => {

  const queue = new myCircularQueue(5)
  console.log(queue)
  queue.enQueue(1)
  queue.enQueue(2)
  queue.enQueue(3)
  // queue.deQueue()
  // queue.deQueue()
  queue.enQueue(4)
  queue.enQueue(5)
  queue.deQueue()
  queue.deQueue()
  queue.deQueue()
  queue.enQueue(6)
  queue.enQueue(7)
  queue.deQueue()
  queue.deQueue()
  queue.deQueue()

  queue.enQueue(8)
  queue.enQueue(9)
  queue.enQueue(10)
  queue.enQueue(11)
  queue.enQueue(12)
  queue.deQueue()

  queue.print()
  console.log(queue)
    
  return (
    <div>CircularQueue</div>
  )
}


class myPriorityQueue {
  constructor() {
    this.list = []
  }

  enQueue(element, priority) {
    const item = {element, priority}

    let added = false
    for(let i = 0; i < this.list.length; i++) {
      //pririty 1 mean it should have high priority, 1 means first , 2 means secound
      if(item.priority < this.list[i].priority) {
        this.list.splice(i, 0, item)
        added = true;
        break;
      }
    }

    if(!added) {
      this.list.push(item)
    }
  }

  dequeue() {
    return this.list.shift()
  }

  peek() {
    return this.list[0]
  }
}

export const PriorityQueue = () => {
  const priority = new myPriorityQueue()

  priority.enQueue(5, 2)
  priority.enQueue(2,3)
  priority.enQueue(3, 1)
  priority.enQueue(1,4)
  console.log(priority)
  priority.dequeue()
  console.log(priority)


  return <>
    <h1>I am Priority queue</h1>
  </>
}



