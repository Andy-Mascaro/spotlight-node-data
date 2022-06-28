const { LinkedListNode, BinaryTreeNode, PersonTreeNode } = require(".");
describe("LinkedListNode class", () => {
  it.skip("binary add tree", () => {
    const B = new BinaryTreeNode("B");
    const A = new BinaryTreeNode("A");
    const C = new BinaryTreeNode("C");
    const D = new BinaryTreeNode("D");

    B.add(A);
    B.add(D);
    B.add(C);

    expect(B.right).toEqual(D);
    expect(B.left).toEqual(A);
    expect(D.left).toEqual(C);
  });
  it('person tree node', () => {
    const jones = {
      name: 'Jones'
    };
    const brook = {
      name: 'Brook'
    };
    const smith = {
      name: 'Smith'
    };
    const nelson = {
      name: 'Nelson',
      phone: '555-1212',
      address: '123 Main St'
    }
    const A = new PersonTreeNode(jones);
    const B = new PersonTreeNode(brook);
    const C = new PersonTreeNode(smith);
    const D = new PersonTreeNode(nelson);

    A.add(B);
    A.add(C);
    A.add(D);
    console.log('A', A);
    let person = A.find('Nelson');
    // person looks like
    // { 
    //   name: 'Nelson', 
    //   phone: '555-1212', 
    //   address: '123 Main St' 
    // }
    let person2 = A.find('Foo');
    expect(person).toEqual({ 
      name: 'Nelson', 
      phone: '555-1212', 
      address: '123 Main St' 
    });
    expect(person2).toEqual(null);
  })
});
