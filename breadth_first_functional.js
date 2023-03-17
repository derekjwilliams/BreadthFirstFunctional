// perform a breadth first search using adjacency list input and vertex to find
// see https://youtu.be/09_LlHjoEiY
// github for the tutorial https://github.com/williamfiset/algorithms
// Java implementation from the github https://github.com/williamfiset/Algorithms/blob/master/src/main/java/com/williamfiset/algorithms/graphtheory/DepthFirstSearchAdjacencyListIterativeFastStack.java

/* simple JS implementation first, with functional stack implementation */
import { Deque } from 'datastructures-js'
import BitSet from "bitset"

function Edge(from, to, cost) {
	this.from = from
  this.to = to
	this.cost = cost
}

export function reconstructPath(graph, start, end, previousValues) {
  breadthFirstSearch(graph, previousValues, start)
  let path = new Array()
  for (let at = end; at != null; at = previousValues[at]) {
    path.push(at);
  }
  path.reverse()
  if (path[0] == start) {
    return path; // if everything is correct?
  }
  path.length = 0;// clear the array
  return path;
}


/**
 * 
 * @param {number} start 
 */
export function breadthFirstSearch(graph, previousValues, start) {
  
  previousValues = new Array(graph.length)
  let visited = new BitSet

  const deque = new Deque();
  deque.pushBack(start) // same as offer (offerLast) in Java ArrayDeque, push to end/back of Deque
  visited.set(start, 1)

  while(!deque.isEmpty()) {
    const vertex = deque.popFront() // same as poll in Java ArrayDeque, dequeues element from front of queue

    const edges = graph[+vertex]

    // Loop through all edges attached to this vertex. Mark vertices as visited once they're
    // in the queue. This will prevent having duplicate vertices in the queue and speedup the BFS.
    edges.forEach(edge => {
      if (!visited.get(edge.to)) {
        visited.set(edge.to, 1)
        previousValues[edge.to] = vertex
        deque.pushBack(edge.to)
      }
    })
  }
}

/**
 * Create an empty graph, an array of arrays
 * @param {number} n number of vertices in empty graph 
 * @returns {Array<Array<Edge>>}
 */
export function createEmptyGraph(n) {
  return Array(n).fill(null).map(_ => new Array());
}

/**
 * Add an undirected edge between vertex 1 and 2, i.e. both directions
 * @param {Array<Array<Edge>>} graph
 * @param {number} u vertex 1 
 * @param {number} v vertex 2
 * @param {number} cost 
 */
function addUndirectedEdge(graph, u, v, cost) {
  graph[+u].push(new Edge(u, v, cost))
  graph[+v].push(new Edge(v, u, cost))
}

// Add an undirected unweighted edge between two verices 'u' and 'v'. The edge added
// will have a weight of 1 since it is intended to be unweighted.
/**
 * 
 * @param {Array<Array<Edge>>} graph
 * @param {number} u vertex 1 
 * @param {number} v vertex 2 
 */
export function addUnweightedUndirectedEdge(graph, u, v) {
  graph[+u].push(new Edge(u, v, 1))
  graph[+v].push(new Edge(v, u, 1))
}

export function addUnweightedUndirectedEdges(graph, edges) {
  edges.forEach((edge) => {
    addUnweightedUndirectedEdge(graph, edge[0], edge[1])
  })
}

