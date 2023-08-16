class Graph {
  constructor() {
    this.adjacencyList = new Map();
    this.root = null;
  }

  addVertex(n) {
    if (typeof n === "string") n = n.toLowerCase();
    if (this.adjacencyList.size === 0) {
      this.root = n;
    }

    if (!this.adjacencyList.get(n)) {
      this.adjacencyList.set(n, []);
    }
  }

  addEdge(n, e) {
    if (typeof n === "string") n = n.toLowerCase();
    if (typeof e === "string") e = e.toLowerCase();

    const node = this.adjacencyList.get(n);
    if (node && !node.includes(e)) {
      const node = this.adjacencyList.get(n);
      node.push(e);
    }
  }

  printMap() {
    console.log(this);
  }

  breathFirst(n) {
    n = typeof n === "string" ? n.toLowerCase() : n;
    let queue = [];
    let level = 0;
    queue.push(this.root);

    let nodeAtEndOfLevel = this.adjacencyList.get(this.root).at(-1);
    let nodeAtBeginningOfLevel = this.adjacencyList.get(this.root).at(0);

    while (queue.length > 0) {
      // console.log(`node at nodeAtBeginningOfLevel: ${nodeAtBeginningOfLevel}`);
      if (
        queue.at(0) === nodeAtBeginningOfLevel ||
        this.adjacencyList.get(queue.at(-1)).at(-1) === nodeAtEndOfLevel
      ) {
        console.log(`level ${level} nodes: ${queue}`);
        nodeAtBeginningOfLevel = this.adjacencyList.get(queue.at(-1)).at(-1);
      }
      const node = queue.shift();
      const children = this.adjacencyList.get(node);

      if (children.length > 0 && children.at(-1) === nodeAtEndOfLevel) {
        level++;
        nodeAtEndOfLevel =
          this.adjacencyList.get(children.at(-1)).length > 0
            ? this.adjacencyList.get(children.at(-1)).at(-1)
            : null;
      }

      if (children.length > 0) {
        children.forEach((element) => {
          queue.push(element);
        });
      }

      if (node === n) {
        console.log(`Found ${node} at level ${level}`);
        return;
      }
    }
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("G");
graph.addVertex("H");
graph.addVertex("I");
graph.addVertex("F");
graph.addVertex("J");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("C", "G");
graph.addEdge("C", "H");
graph.addEdge("D", "I");
graph.addEdge("I", "J");

graph.printMap();

graph.breathFirst("j");
