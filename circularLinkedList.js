class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  // add(node): Add a new node to the beginning of the circular linked list.
  add(node) {
    if (this.head === null) {
      this.head = node;
      this.head.next = this.head;
    } else {
      let temp = this.head;
      while (temp.next !== this.head) {
        temp = temp.next;
      }

      temp.next = node;
      node.next = this.head;
      this.head = node;
    }
  }

  // remove(): Remove and return the node at the beginning of the circular linked list.
  remove() {
    if (this.head === null) {
      return "list is already empty";
    } else {
      const removedNode = this.head;
      let temp = this.head.next;
      while (temp.next !== this.head) {
        temp = temp.next;
      }

      temp.next = this.head.next;
      this.head = this.head.next;
      return removedNode;
    }
  }

  // isEmpty(): Check if the circular linked list is empty.
  isEmpty() {
    return this.head === null;
  }

  // size(): Return the number of nodes in the circular linked list.
  get size() {
    let count = 0;
    let temp = this.head;
    if (temp === null) return count;
    while (temp.next !== this.head) {
      temp = temp.next;
      count += 1;
    }
    count += 1;
    return count;
  }
  // search(value): Search for a node with a specific value in the circular linked list.
  search(value) {
    let temp = this.head;
    let searchVal = null;
    if (temp.value === value) {
      searchVal = temp;
    } else {
      while (temp.next !== this.head) {
        if (temp.value === value) {
          searchVal = temp;
          break;
        }
        temp = temp.next;
      }
      if (temp.next === this.head && temp.value === value) {
        searchVal = temp;
      }
    }

    return searchVal || "value not found in List";
  }

  // print(): Print the values of all nodes in the circular linked list.
  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr);
      curr = curr.next;
      if (curr.next === this.head) {
        console.log(curr);
        break;
      }
    }
  }

  // toArray(): Convert the circular linked list to an array.
  toArray() {
    const arr = [];
    let temp = this.head;
    while (temp) {
      arr.push(temp);
      temp = temp.next;
      if (temp.next === this.head) {
        arr.push(temp);
        break;
      }
    }
    return arr;
  }

  // getHead(): Return the head node of the circular linked list.
  getHead() {
    return this.head;
  }

  // reverse(): Reverse the order of nodes in the circular linked list.
  reverse() {
    let curr = this.head;
    // capture first next value;
    let nextNode = curr.next;
    // reassign curr.next to be null;
    curr.next = null;
    let previous = null;
    while (curr) {
      previous = curr;
      curr = nextNode;
      nextNode = nextNode.next;
      curr.next = previous;
      if (curr === this.head) {
        this.head = previous;
        break;
      }
    }
  }

  // insertAfter(existingNode, newNode): Insert a new node after a specified existing node.
  insertAfter(existingNode, newNode) {
    let curr = this.head;
    let nextNode = curr.next;
    while (curr) {
      if (existingNode === curr) {
        curr.next = newNode;
        newNode.next = nextNode;
        break;
      }
      curr = curr.next;
      nextNode = curr.next;
      if (curr === this.head) {
        console.log("node not found");
        break;
      }
    }
  }

  // insertBefore(existingNode, newNode): Insert a new node before a specified existing node.
  insertBefore(existingNode, newNode) {
    let curr = this.head;
    let previous = null;

    while (curr) {
      if (curr === existingNode) {
        if (curr === this.head) {
          this.head = newNode;
        }
        newNode.next = curr;

        if (previous) {
          previous.next = newNode;
        }
      }
      previous = curr;
      curr = curr.next;
      if (curr === newNode) {
        previous.next = this.head;
        break;
      }
      if (curr === this.head) {
        console.log("node not found");
        break;
      }
    }
  }

  // removeNode(node): Remove a specific node from the circular linked list.
  removeNode(nodeToRemove) {
    let curr = this.head;
    let previous = null;
    let removedNode = null;
    while (curr) {
      if (curr === nodeToRemove) {
        if (curr === this.head) {
          this.head = curr.next;
        }
        if (previous) {
          previous.next = curr.next;
        }
        removedNode = curr;
      }
      // move onto next node;
      previous = curr;
      curr = curr.next;
      if (curr.next === removedNode) {
        curr.next = this.head;
        break;
      } else if (curr.next === this.head) {
        break;
      }
    }
  }
}

class Node {
  constructor(obj) {
    this.next = null;
    this.value = obj;
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);
const node8 = new Node(8);
const node9 = new Node(9);
const cirLink = new CircularLinkedList();
// console.log(cirLink.isEmpty());
cirLink.add(node1);
cirLink.add(node2);
cirLink.add(node3);
cirLink.add(node4);
cirLink.add(node5);
cirLink.add(node6);
cirLink.add(node7);
// console.log(cirLink.size);
// console.log(cirLink.remove());
// console.log(cirLink.remove());
// console.log(cirLink.remove());
// console.log(cirLink.search(1));
// // cirLink.print();
// console.log(cirLink.toArray());
// console.log(cirLink.getHead());
console.log(cirLink.reverse());
// console.log(cirLink.print());

cirLink.insertAfter(node7, node8);
cirLink.insertBefore(node1, node9);
// console.log(cirLink.toArray());
cirLink.removeNode(node9);
cirLink.removeNode(node1);
cirLink.removeNode(node6);
cirLink.removeNode(node5);
cirLink.removeNode(node2);
console.log(cirLink.toArray());
