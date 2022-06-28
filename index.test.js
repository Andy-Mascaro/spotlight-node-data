const { LinkedListNode, BinaryTreeNode } = require(".");
describe("LinkedListNode class", () => {
  it("binary add tree", () => {
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
});
