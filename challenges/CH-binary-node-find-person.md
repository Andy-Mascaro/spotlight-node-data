Binary Node Find Person
---

## Challenge

Implement the find method for this `PersonTreeNode` class, that takes a name and returns the that _person object_:

```js
class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }

  add(node) {
    // implemented as in previous challenge
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

  findPerson(name) {
    // Implement me!
    if (name === this.value) return this.person;
    if (name < this.value) {
      this.left.findPerson(name);
    }
    if (name > this.value) {
      this.right.findPerson(name);
    }
  }
}
```

Keep in mind this is a recursive operation.

## Test Cases

![Person Tree](person-nodes.png)


```js
// "root" is the node at the root of the tree (the tree)
let person = root.find('Nelson');
// person looks like
// { 
//   name: 'Nelson', 
//   phone: '555-1212', 
//   address: '123 Main St' 
// }

let person2 = root.find('Foo');
// person2 is null
```