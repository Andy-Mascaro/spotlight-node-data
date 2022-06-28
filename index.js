class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(val) {
    this.head = new Node(val);
  }

  add(val) {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(val);
  }

  removeTail() {
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  getList() {
    const listArr = [];
    let current = this.head;
    while (current.next) {
      listArr.push(current.val);
      current = current.next;
    }
    listArr.push(current.val);
    return listArr;
  }
}

const list = new LinkedList("A");
// console.log(list.head);
list.add("B");
// console.log(list.getList());
list.add("C");
list.add("D");
list.add("E");
// console.log(list.getList());

console.log("list before", list.getList());
list.removeTail();
console.log("list after", list.getList());
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    if (node.value < this.value) {
      if (this.left) {
        this.left.add(node);
      } else {
        this.left = node;
      }
    }
    if (node.value > this.value) {
      if (this.right) {
        this.right.add(node);
      } else {
        this.right = node;
      }
    }
  }
}

class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }

  add(node) {
    // implemented as in previous challenge
    if (node.value < this.value) {
      if (this.left) {
        this.left.add(node);
      } else {
        this.left = node;
      }
    }
    if (node.value > this.value) {
      if (this.right) {
        this.right.add(node);
      } else {
        this.right = node;
      }
    }
  }

  find(name) {
    console.log('this', this);
    // Implement me!
    if (name === this.value) return this.person;
    if (name < this.value) {
      this.left.find(name);
    }
    if (name > this.value) {
      console.log('this.right', this.right);
      console.log('name', name);
      this.right.find(name);
    }
  }
}

module.exports = { LinkedList, BinaryTreeNode, PersonTreeNode };
