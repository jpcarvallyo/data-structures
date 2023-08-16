class Stack {
  constructor() {
    this.arr = [];
  }

  // Need an add fn
  add(node) {
    this.arr.push(node);
  }

  // Need a pop fn
  // grab last index
  pop() {
    return this.arr.pop();
  }

  // Need a peek fn
  peak() {
    return this.arr.at(-1);
  }

  // isEmpty fn
  isEmpty() {
    return this.arr.length === 0;
  }

  size() {
    return this.arr.length;
  }
}

const stack = new Stack();

stack.add({ name: "jimmy" });
stack.add({ name: "al" });
stack.add({ name: "Koolio" });
stack.add({ name: "jimmer" });

stack.pop();
stack.pop();
stack.pop();
stack.add({ name: "Jean" });
stack.pop();
stack.pop();
console.log(`is stack empty: ${stack.isEmpty()}`);
console.log(`size of stack: ${stack.size()}`);
