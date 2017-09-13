/*
 * routeBetweenNodes.js
 * 
 * Given a directed graph, design an algorithm to find out whether
 * there is a route between two nodes.

 * Google "directed graph" and look under images for visual examples.
 * (Bonus: Write both DFS and BFS methods. You'll have to comment one.
 */

// DFS
/*
function routeBetweenNodes(node1, node2) {
  const cache = {};

  let result = false;
  const moveToNodes = (n) => {
    cache[n.value] = 1;

    if (n.value === node2.value) return true;

    for (let nn of n.edges) {
      if (cache[nn.value]) continue;
      return moveToNodes(nn);
    }
    return false;
  }
  for (let node of node1.edges) {
    result = moveToNodes(node);
    if (result) break;
  }
  return result;
}
*/

// BFS
function routeBetweenNodes(node1, node2) {
  const cache = {};

  const bfs = () => {
    if (queue.length === 0)
      return false;

    const currentNode = queue.shift();
    if (currentNode.value === node2.value)
      return true;

    cache[currentNode.value] = true;
    for (let nn of currentNode.edges) {
      if (!cache[nn.value])
        queue.push(nn);
    }
    return bfs();
  }

  cache[node1.value] = true;
  const queue = node1.edges;
  return bfs();
}

/* 
 * Here is a test graph: (please be sure to remove this dummy data
 * before running tests):
*/

/*const graph = {
  a: {
    value: 'a',
    edges: []
  },
  b: {
    value: 'b',
    edges: []
  },
  c: {
    value: 'c',
    edges: []  },
  d: {
    value: 'd',
    edges: []
  },
  e: {
    value: 'e',
    edges: []
  },
}; 

graph.a.edges.push(graph.b, graph.d, graph.e);
graph.b.edges.push(graph.a, graph.e);
graph.d.edges.push(graph.e);
graph.e.edges.push(graph.c, graph.a);
console.log(routeBetweenNodes(graph.a, graph.c)); // true
console.log(routeBetweenNodes(graph.c, graph.a)); // false 
*/


const graph = {
  a: {
    value: 'a',
    edges: []
  },
  b: {
    value: 'b',
    edges: []
  },
  c: {
    value: 'c',
    edges: []
  },
  d: {
    value: 'd',
    edges: []
  },
  e: {
    value: 'e',
    edges: []
  },
  f: {
    value: 'f',
    edges: []
  },
  g: {
    value: 'g',
    edges: []
  }
};

graph.a.edges.push(graph.b, graph.d, graph.e);
graph.b.edges.push(graph.a, graph.e);
graph.d.edges.push(graph.f, graph.e);
graph.e.edges.push(graph.c, graph.a);
graph.f.edges.push(graph.d);
graph.g.edges.push(graph.c, graph.f);

console.log(routeBetweenNodes(graph.a, graph.f)); // true
console.log(routeBetweenNodes(graph.a, graph.c)); // true

