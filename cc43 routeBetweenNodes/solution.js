// https://repl.it/student/assignments/371414/model_solution?fromSubmissionId=1510620
//

// Breadth First Search
function routeBetweenNodes(node1, node2) {
  const roadMap = {};
  const queue = [node1];

  const toPath = (node) => {
    if (roadMap[node.value]) return;
    roadMap[node.value] = true;
    node.edges.forEach(item => queue.push(item));
  };

  while (queue.length) {
    if (roadMap[node2.value]) return true;
    toPath(queue.shift());
  }
  return false;
}
