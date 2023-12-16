import Node from "./Node";
export default class LinkedList {
  _head: Node | null;

  constructor(head: Node | null = null) {
    this._head = head;
  }

  get head(): Node | null {
    return this._head;
  }

  set head(head: Node) {
    this._head = head;
  }

  append(value: number) {
    const insertedNode = new Node(value, null);
    if (this.head == null) {
      this.head = insertedNode;
    } else {
      let headCopy = this.head;
      while (headCopy.next !== null) {
        headCopy = headCopy.next;
      }
      headCopy.next = insertedNode;
    }
  }
}

// const ll = new LinkedList();
// ll.append(2);
// ll.append(3);
// ll.append(5);
// ll.append(5);

// console.log((ll.head as Node).next);
