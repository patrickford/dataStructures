class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    let node = new Node(value);    
    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }

  find(lookup) {
    if (this.head === null) {
      return false;
    } else {
      let currentNode = this.head;
      if (currentNode.value === lookup) {
        return true;
      }
      while (currentNode.next) {
        currentNode = currentNode.next;
        if (currentNode.value === lookup) {
          return true;
        }        
      }
      return false;
    }
  }

  getLength() {
    let counter = 0;
    if (this.head === null) {
      return counter;
    } else {
      let currentNode = this.head;
      counter++;
      while (currentNode.next) {
        currentNode = currentNode.next;
        counter++;
      }
      return counter;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
