/******* Singly Linked List program *******/

class Node {
  /*
    An object for storing a single node of a linked list
    Models two attributes - data and the link to the next node in the list
  */
  constructor(data) {
    this.data = data;
    this.nextNode = null;
  }
}

let nodeObj = new Node(10);

// Linked List Class
class LinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head;
  }

  // Returns the number of nodes in the list
  // Takes O(n) time
  size() {
    var current = this.head;
    var count = 0;

    while (current) {
      count += 1;
      current = current.nextNode;
    }
    console.log(count);
  }

  // Adds new Node containing data at head of the list
  // Takes O(1) time
  // add(data) {
  //   var new_node = new Node(data);
  //   new_node.nextNode = this.head;
  //   this.head = new_node;
  // }
  add(data) {}
}

function add(data) {
  data = 1000;
  console.log(data);
}

let ls = new LinkedList();
ls.head = nodeObj;
// ls.size();
ls.add();
