const Queue = require('queue-fifo');

class Node {
  constructor(val, fromRed, length) {
    this.val = val;
    this.fromRed = fromRed;
    this.length = length;
  }
}

console.log(shortestAlternatingPaths(6, [[2,3],[0,5],[3,1],[5,0],[3,0],[0,0]], [[1,2],[3,2],[1,0],[2,2],[5,2]]));
// Shortest Path with Alternating Colors

function shortestAlternatingPaths(n, red_edges, blue_edges) {
  if (n <= 1) {
    return [0];
  }

  let answer = [0];

  for (let i = 1; i < n; i++) {
    let path = shortestPath(i, red_edges, blue_edges);
    answer.push(path);
  }

  return answer;
}

function shortestPath(target, red_edges, blue_edges) {
  let redVisited = new Set();
  let blueVisited = new Set();

  let queue = new Queue();

  queue.enqueue(new Node(0, true, 0));
  redVisited.add(0);
  blueVisited.add(0);

  queue.enqueue(new Node(0, false, 0));
  
  while (!queue.isEmpty()) {
    // pop node off queue
    let current = queue.dequeue();
  
    // if node is target return length
    if (current.val === target) {
      return current.length;
    }

    // add node alternate color neighbors to queue that haven't been visited
    // if adding, add to visited also
    addNeighbors(current, queue, redVisited, blueVisited, red_edges, blue_edges);
  }

  return -1;
}

function addNeighbors(current, queue, redVisited, blueVisited, red_edges, blue_edges) {
  let neighbors = red_edges;
  let visited = redVisited;
  
  if (current.fromRed) {
    neighbors = blue_edges;
    visited = blueVisited;
  }

  neighbors.forEach((edge) => {
    if (edge[0] === current.val && !visited.has(edge[1])) {
      queue.enqueue(new Node(edge[1], !current.fromRed, current.length + 1));
    }
  });
}