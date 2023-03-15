// perform a breadth first search using adjacency list input and vertex to find
// see https://youtu.be/09_LlHjoEiY?t=1400s
// github for the tutorial https://github.com/williamfiset/algorithms

/* simple JS implementation first, with functional stack implementation */
import { stackPeek, stackPop, stackPush, stackGetIterator } from "@derekjwilliams/linkedstack"
import { Deque } from 'datastructures-js';import BitSet from "bitset"

function Edge(from, to, cost) {
	this.from = from
  this.to = to
	this.cost = cost
}

//Class implemenation to make initial translation from Java a bit less painful

export class BreadthFirstSearchAdjacencyListIterative {
  //int
  #n_size
  //array of integers
  #previousValues
  // Array<Array<Edge>>
  #graph = new Array()

  /**
   * 
   * @param {Array<Array<Edge>>} graph 
   */
  constructor(graph) {
    this.#n_size = graph.length;
    this.#graph = graph; //TODO copy the graph instead of assigning
  }
  
  reconstructPath(start, end) {
    this.breadthFirstSearch(start)
    let path = new Array()
    for (let at = end; at != null; at = this.#previousValues[at]) {
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
  breadthFirstSearch(start) {
    this.#previousValues = new Array(this.#n_size)
    const visited = new Array(this.#n_size)
    const deque = new Deque();
    deque.pushBack(start) // same as offer (offerLast) in Java ArrayDeque, push to end/back of Deque
    visited[start] = true;
    console.log('start value: ', JSON.stringify(start))
    console.log('deque value: ', JSON.stringify(deque))
    console.log('deque.back value: ', JSON.stringify(deque.back[0]))
    console.log('deque.front value: ', JSON.stringify(deque.front))
    // deque.back
    

    while(!deque.isEmpty()) {
     const node = deque.popFront() // same as poll in Java ArrayDeque, dequeues element from front of queue

      console.log('node value: ', JSON.stringify(node))
      const edges = this.#graph[+node]

      // Loop through all edges attached to this node. Mark nodes as visited once they're
      // in the queue. This will prevent having duplicate nodes in the queue and speedup the BFS.
      edges.forEach((edge) => {
        if (!visited[edge.to]) {
          visited[edge.to] = true
          this.#previousValues[edge.to] = node
          deque.pushBack(edge.to)
        }
      })
    }
  }

  /**
   * 
   * @param {number} n number of nodes in empty graph 
   * @returns {Array<Array<Edge>>}
   */
  static createEmptyGraph(n) {
    const graph = new Array();
    for (let i = 0; i < n; i++) {
      graph.push(new Array()) // graph is an Array of Array of Edges
    }
    return graph;
  }
  /**
   * Add directed edge to graph
   * @param {Array<Array<Edge>>} graph 
   * @param {number} from 
   * @param {number} to 
   * @param {number} cost 
  */

  static addDirectedEdge(graph, from, to, cost) {
    graph[+from].push(new Edge(from, to, cost))
  }

  /**
   * Add an undirected edge between nodes 'from' and 'to'.
   * @param {Array<Array<Edge>>} graph
   * @param {number} from 
   * @param {number} to 
   * @param {number} cost 
   */
  static addUndirectedEdge(graph, from, to, cost) {
    BreadthFirstSearchAdjacencyListIterative.addDirectedEdge(graph, from, to, cost);
    BreadthFirstSearchAdjacencyListIterative.addDirectedEdge(graph, to, from, cost);
  }

  // Add an undirected unweighted edge between nodes 'u' and 'v'. The edge added
  // will have a weight of 1 since its intended to be unweighted.
  /**
   * 
   * @param {Array<Array<Edge>>} graph
   * @param {number} from 
   * @param {number} to 
   */
  static  addUnweightedUndirectedEdge(graph, from, to) {
    BreadthFirstSearchAdjacencyListIterative.addUndirectedEdge(graph, from, to, 1);
  }

} 

/* Java implementation code

// - constructor for the BreadthFirstSearchAdjacencyListIterative class
public BreadthFirstSearchAdjacencyListIterative(List<List<Edge>> graph) {
  if (graph == null) throw new IllegalArgumentException("Graph can not be null");
  n = graph.size();
  this.graph = graph;
}


private void breadthFirstSearch(int start) {
  prev = new Integer[n];
  boolean[] visited = new boolean[n];
  Deque<Integer> queue = new ArrayDeque<>(n);

  // Start by visiting the 'start' node and add it to the queue.
  queue.offer(start);
  visited[start] = true;

  // Continue until the BFS is done.
  while (!queue.isEmpty()) {
    int node = queue.poll();
    List<Edge> edges = graph.get(node);

    // Loop through all edges attached to this node. Mark nodes as visited once they're
    // in the queue. This will prevent having duplicate nodes in the queue and speedup the BFS.
    for (Edge edge : edges) {
      if (!visited[edge.to]) {
        visited[edge.to] = true;
        prev[edge.to] = node;
        queue.offer(edge.to);
      }
    }
  }
}
public List<Integer> reconstructPath(int start, int end) {
    bfs(start);
    List<Integer> path = new ArrayList<>();
    for (Integer at = end; at != null; at = prev[at]) path.add(at);
    Collections.reverse(path);
    if (path.get(0) == start) return path;
    path.clear();
    return path;
  }
  
*/
  
  
  
  
  