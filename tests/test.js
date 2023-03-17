import { expect } from 'chai'
import { Deque } from 'datastructures-js'
import { addUnweightedUndirectedEdges, createEmptyGraph, reconstructPath } from '../breadth_first_functional.js'

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
      let graph = createEmptyGraph(n)
      addUnweightedUndirectedEdges(graph, 
        [
          [0,7],
          [0, 9],
          [0, 11],
          [7, 11],
          [7, 6],
          [7, 3],
          [6, 5],
          [3, 4],
          [2, 3],
          [2, 12],
          [12, 8],
          [8, 1],
          [1, 10],
          [10, 9],
          [9, 8]
        ]
      )
      const start = 10
      const end = 5
      let previousValues = new Array(graph.length);
      let path = reconstructPath(graph, start, end, previousValues)
    })
  })
})


