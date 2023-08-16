class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
  get getItem() {
    return this.item;
  }

  /**
   * @param {any} value
   */
  set setItem(value) {
    this.item = value + 1;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.next = null;
  }

  insert(value, position = null) {
    if (this.head === null) {
      this.head = value;
    } else if (this.next === null) {
      let temp = this.head;
      this.head = value;
      this.head.next = temp;
    }
    if (position) {
      console.log("we`re in ");
      let currentPosition = 0;
      let previous = null;
      let current = this.head;
      while (currentPosition !== position) {
        currentPosition++;
        if (position === 1) {
          previous = this.head;
        } else {
          previous = current;
        }
        current = current.next;
      }
      previous.next = value;
      value.next = current;
    }
    this.size++;
  }

  showAll() {
    let current = this.head;
    let listValues = [];

    while (current) {
      listValues.push(current.item);
      current = current.next;
    }
    console.log(listValues);
    console.log(this.size);
  }

  find(value) {
    let current = this.head;
    while (current) {
      if (current.item.name === value) {
        return current.item;
      }
      current = current.next;
    }
    return `${value} not found`;
  }

  remove(value) {
    let current = this.head;
    while (current) {
      if (current.next?.item?.name === value) {
        current.next = current.next.next;
        this.size--;
        return `item removed`;
      } else {
        current = current.next;
      }
    }
    return `${value} not found in list, could not remove`;
  }
}

const firstNode = new Node({ name: "James", age: 22 });
const secondNode = new Node({ name: "Jimmy", age: 29 });
const thirdNode = new Node({ name: "Curtis", age: 30 });
const fourthNode = new Node({ name: "Kristof", age: 19 });
const fifthNode = new Node({ name: "Manny", age: 55 });
const assNode = new Node({ name: "Ass", age: 30 });

const myList = new LinkedList();
myList.insert(firstNode);
myList.insert(secondNode);
myList.insert(thirdNode);
myList.insert(fourthNode);
myList.insert(fifthNode);
// [
//   { name: 'Manny', age: 55 },
//   { name: 'Kristof', age: 19 },
//   { name: 'Curtis', age: 30 },
//   { name: 'Jimmy', age: 29 },
//   { name: 'James', age: 22 }
// ]
myList.insert(assNode, 3);

// const kristOf = myList.find("Kristof");

// console.log(myList.remove("Curtis"));
// console.log(myList.remove("Jimmi"));
myList.showAll();
