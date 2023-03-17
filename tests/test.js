import { expect } from 'chai'
import { Deque } from 'datastructures-js'
import { BreadthFirstSearchAdjacencyListIterative } from '../breadth_first_functional.js'

describe('Breadth First Simple', function () {
  describe('constructor', () => {
    it('creates an empty deque', () => {
      let deque = new Deque()
      expect(deque.size()).to.equal(0)
    })
  })
  describe('pushBack', () => {
    it('add elements at the back', () => {
      let deque = new Deque()
      deque.pushFront(3)
      deque.pushFront(2)
      deque.pushFront(1)
      deque.pushBack(4)
      deque.pushBack(5)
      deque.pushBack(6)
      expect(deque.size()).to.equal(6)
    })
  })
  describe('popFront', () => {
    it('remove elements from front', () => {
      let deque = new Deque()
      deque.pushFront(3)
      deque.pushFront(2)
      deque.pushFront(1)
      deque.pushBack(4)
      deque.pushBack(5)
      deque.pushBack(6)
      expect(deque.popBack()).to.equal(6)
    })
  })

  describe('pushBack', () => {
    it('add elements at the back', () => {
      const n = 13
      let graph = BreadthFirstSearchAdjacencyListIterative.createEmptyGraph(n)
      BreadthFirstSearchAdjacencyListIterative.addUnweightedUndirectedEdge(graph, 0, 7)
      console.log(JSON.stringify(graph))
      BreadthFirstSearchAdjacencyListIterative.addUnweightedUndirectedEdge(graph, 0, 9)
      BreadthFirstSearchAdjacencyListIterative.addUnweightedUndirectedEdge(graph, 0, 11)
      BreadthFirstSearchAdjacencyListIterative.addUnweightedUndirectedEdge(graph, 7, 11)
      BreadthFirstSearchAdjacencyListIterative.addUnweightedUndirectedEdge(graph, 7, 6)
      BreadthFirstSearchAdjacencyListIterative.addUnweightedUndirectedEdge(graph, 7, 3)
      BreadthFirstSearchAdjacencyListIterative.addUnweightedUndirectedEdge(graph, 6, 5)
      BreadthFirstSearchAdjacencyListIterative.addUnweightedUndirectedEdge(graph, 3, 4)
      BreadthFirstSearchAdjacencyListIterative.addUnweightedUndirectedEdge(graph, 2, 3)
      BreadthFirstSearchAdjacencyListIterative.addUnweightedUndirectedEdge(graph, 2, 12)
      BreadthFirstSearchAdjacencyListIterative.addUnweightedUndirectedEdge(graph, 12, 8)
      BreadthFirstSearchAdjacencyListIterative.addUnweightedUndirectedEdge(graph, 8, 1)
      BreadthFirstSearchAdjacencyListIterative.addUnweightedUndirectedEdge(graph, 1, 10)
      BreadthFirstSearchAdjacencyListIterative.addUnweightedUndirectedEdge(graph, 10, 9)
      BreadthFirstSearchAdjacencyListIterative.addUnweightedUndirectedEdge(graph, 9, 8)

      const solver = new BreadthFirstSearchAdjacencyListIterative(graph)
      let start = 10
      let end = 5
      let path = solver.reconstructPath(start, end)
    })
  })
})


