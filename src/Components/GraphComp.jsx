import React from 'react'

//https://chatgpt.com/share/6994994e-3ea4-8010-9d3b-17ff64810b63
class myGraph {
    constructor() {
        this.adjecentList = {}
    }

    addVertex(vertex) {
        this.adjecentList[vertex] = []
    }

    addEdge(vertex1, vertex2) {
        if(vertex1 in this.adjecentList) {
            this.adjecentList[vertex1].push(vertex2)
        } else {
            this.adjecentList[vertex1] = [vertex2]
        }
        
        if(vertex2 in this.adjecentList) {
            this.adjecentList[vertex2].push(vertex1)
        } else {
            this.adjecentList[vertex2] = [vertex1]
        }
    }

    hasEdge(vertex1, vertex2) {
        if(vertex1 in this.adjecentList && vertex2 in this.adjecentList) {
            return this.adjecentList[vertex1].includes(vertex2) && this.adjecentList[vertex2].includes(vertex1)
        }
        return false
    }

    display() {
        for(let vertex in this.adjecentList) {
            console.log(vertex + "-->" + [...this.adjecentList[vertex]])
        }
    }

    removeEdge(vertex1, vertex2) {
        let index = this.adjecentList[vertex1].indexOf(vertex2)
        if(index != -1) {
            this.adjecentList[vertex1].splice(index, 1)
        }

        index = this.adjecentList[vertex2].indexOf(vertex1)
        if(index != -1) {
            this.adjecentList[vertex2].splice(index, 1)
        }
    }

    removeVertex(vertexToRemove) {
        if(!(vertexToRemove in this.adjecentList)) {
            return
        }
        for(let vertex in this.adjecentList) {
            this.removeEdge(vertex, vertexToRemove)
        }
        delete this.adjecentList[vertexToRemove]
    }

    depthFirstSearch(startVertex, visisted = new Set()) {
        visisted.add(startVertex)
        for(let i of this.adjecentList[startVertex]) {
            if(!visisted.has(i)) {
                console.log(i)
                this.depthFirstSearch(i, visisted)
            }
        }
    }

    breadthFirstSearch(startVertex) {
        const queue = [startVertex]
        const visited = [startVertex]
        while(queue.length > 0) {
            const poped = queue.shift()
            console.log(poped)

            for(let i of this.adjecentList[poped]) {
                if(!visited.includes(i)) {
                    visited.push(i)
                    queue.push(i)
                }
            }
        }
    }

}



export function MyGraph() {
    const graph = new myGraph();

    graph.addVertex("Root")
    graph.addVertex("A")
    graph.addVertex("B")
    graph.addVertex("C")
    graph.addVertex("D")
    graph.addVertex("E")

    graph.addEdge("A", "Root")
    graph.addEdge("A", "B")
    graph.addEdge("A", "C")
    graph.addEdge("D", "B")
    graph.addEdge("D", "E")
    console.log(graph)

    // console.log(graph.display())
    // console.log(graph.hasEdge("B", "C"))

    // graph.removeEdge("A", "C")
    // console.log(graph.display())

    // graph.removeVertex("A")
    // console.log(graph.display())

    graph.depthFirstSearch("Root")
    // graph.breadthFirstSearch("Root")


  return (
    <div>Graph</div>
  )
}


class Graph {
    constructor() {
        this.adjacentList = {}
    }

    addVertex(vertex) {
        this.adjacentList[vertex] = []
    }

    addEdge(vertex1, vertex2) {
        if(!(vertex1 in this.adjacentList)) {
            this.addVertex(vertex1)
        }

        if(!(vertex2 in this.adjacentList)) {
            this.addVertex(vertex2)
        }

        this.adjacentList[vertex1].push(vertex2)
        this.adjacentList[vertex2].push(vertex1)
    }

    hasEdge(vertex1, vertex2) {
        if((vertex1 in this.adjacentList) && (vertex2 in this.adjacentList)) {
            return this.adjacentList[vertex1].includes(vertex2) && this.adjacentList[vertex2].includes(vertex1)
        }
        return false
    }

    //Just casually built for finding different path in graph
    // dfs(vertex) {
    //     const res = []
    //     const adjlist = this.adjacentList;

    //     function backtrace(verteces, visited, state, parent) {
    //             for(let v of verteces) {
    //             if(verteces.length == 1) {
    //                 res.push(state.slice())
    //             }

    //             if(!visited.includes(v)) {
    //                 state.push(v)
    //                 visited.push(v)
    //                 backtrace(adjlist[v], visited, state, v)
    //                 state.pop()
    //             }
    //         }
    //     }

    //     backtrace(adjlist[vertex], [vertex], [vertex])

    //     console.log(res)
    //     return res
    // }

    dfs(vertex, visited = [vertex]) {
        for(let v of this.adjacentList[vertex]) {
            if(!visited.includes(v)) {
                console.log(v)
                visited.push(v)
                this.dfs(v, visited)
            }
        }
    }

    bfs(vertex) {
        const arr = [vertex]
        const visited = []

        while(arr.length != 0) {
            const temp = arr.shift()
            visited.push(temp)
            console.log(temp)
            
            for(let v of this.adjacentList[temp]) {
                if(!visited.includes(v)) {
                    arr.push(v)
                }
            }
        }
    }

    //using DFS
    isCircular(vertex, visited = [vertex], parent = null) {
        for(let v of this.adjacentList[vertex]) {
            if(visited.includes(v) && parent !== v) {
                return true
            }
            if(!visited.includes(v)) {
                visited.push(v)
                if (this.isCircular(v, visited, vertex)) {
                    return true
                }
            }
        }
        return false
    }

    isCircularUsingBFS(vertex) {
        const arr = [vertex]
        const visited = new Map()
        visited.set(vertex, null)

        while(arr.length != 0) {
            const temp = arr.shift()
            
            console.log(temp)
            
            for(let v of this.adjacentList[temp]) {
                if(visited.has(v) && v != visited.get(temp)) {
                    return true
                }

                if(!visited.has(v)) {
                    visited.set(v, temp)
                    arr.push(v)
                }
            }
        }
        return false
    }
}


function GraphComp() {
    // const graph = new Graph()

    // graph.addVertex("A")
    // graph.addVertex("B")
    // graph.addEdge("A", "B")
    // graph.addEdge("A", "C")

    // console.log(graph.dfs("A"))
    // console.log(graph)



    const graph = new Graph();

    graph.addVertex("Root")
    graph.addVertex("A")
    graph.addVertex("B")
    graph.addVertex("C")
    graph.addVertex("D")
    graph.addVertex("E")
    graph.addVertex("F")

    graph.addEdge("A", "Root")
    graph.addEdge("A", "B")
    graph.addEdge("A", "C")
    graph.addEdge("C", "B")
    graph.addEdge("D", "B")
    graph.addEdge("D", "E")
    graph.addEdge("D", "F")

    console.log(graph)
    // graph.bfs("Root")

    console.log(graph.isCircularUsingBFS("Root"))

  return (
    <div>Graph</div>
  )
}

export default GraphComp


class AdjMatrixGraph {
    constructor(size) {
        const arr = new Array(size)
        this.adjMatrix = Array.from(arr, () => new Array(size).fill(0))
    }

    addEdge(i, j) {
        this.adjMatrix[i][j] = 1
        this.adjMatrix[j][i] = 1
    }

    removeEdge(i, j) {
        this.adjMatrix[i][j] = 0
        this.adjMatrix[j][i] = 0
    }

    dfs(vertex, visisted = new Set()) {
        console.log(vertex)
        visisted.add(vertex)

        for(let j = 0; j <this.adjMatrix.length; j++) {
            if((this.adjMatrix[vertex][j] == 1) && !(visisted.has(j))) {
                this.dfs(j, visisted)
            }
        }
    }

    bfs(vertex) {
        const arr = []
        arr.push(vertex)
        const visited = new Set()
        visited.add(vertex)

        while(arr.length > 0) {
            const temp = arr.shift()
            console.log(temp)

            for(let j = 0; j<this.adjMatrix.length; j++) {
                if(!visited.has(j) && (this.adjMatrix[temp][j] == 1)) {
                    visited.add(j)
                    arr.push(j)
                }
            }
        }
    }
}


export function AdjMatrixGraphComp() {
    const adjMatrix = new AdjMatrixGraph(5)

    adjMatrix.addEdge(0, 1)
    adjMatrix.addEdge(0, 2)
    adjMatrix.addEdge(0, 4);
    adjMatrix.addEdge(1, 3);

    // console.log(adjMatrix.dfs(0))
    console.log(adjMatrix.bfs(0))

  return (
    <div>GraphComp</div>
  )
}


