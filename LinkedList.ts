import Node from "./Node";
export default class LinkedList {
  _head: Node | null;

  constructor(head: Node | null = null) {
    this._head = head;
  }

  get head(): Node | null {
    return this._head;
  }

  set head(head: Node | null) {
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

  prepend(value: number) {
    const insertedHead = new Node(value, null);
    insertedHead.next = this.head;
    this.head = insertedHead;
  }

  size() {
    let size = 0;
    if (this.head === null) return size;
    else {
      let headCopy = this.head;
      while (headCopy !== null) {
        headCopy = headCopy.next as Node;
        size++;
      }
      return size;
    }
  }

  tail() {
    if (this.head === null) return null;
    else {
      let headCopy = this.head;
      while (headCopy.next !== null) {
        headCopy = headCopy.next;
      }
      return headCopy;
    }
  }

  at(index: number) {
    if (index < 0) throw new Error("Negative index not allowed");
    if (index === 0) return this.head;
    else {
      let headCopy = this.head;
      for (let i = 0; i < index; i++) {
        headCopy = headCopy?.next as Node;
        if (headCopy === null) throw new Error("null Node at given index");
      }
      return headCopy;
    }
  }

  pop() {
    if (this.head === null) return;
    else if (this.head?.next === null) {
      this.head = null;
    } else {
      let headCopy = this.head;
      let prev = headCopy;
      while (headCopy.next !== null) {
        prev = headCopy;
        headCopy = headCopy.next;
      }
      prev.next = null;
    }
  }

  contains(value: number) {
    if (this.head === null) return false;
    else {
      let headCopy = this.head;
      while (headCopy !== null) {
        if (headCopy.value === value) return true;
        headCopy = headCopy.next as Node;
      }
    }
    return false;
  }

  find(value: number) {
    if (this.head === null) return null;
    else {
      let index = 0;
      let headCopy = this.head;
      while (headCopy !== null) {
        if (headCopy.value === value) return index;
        headCopy = headCopy.next as Node;
        index++;
      }
    }
    return null;
  }

  toString() {
    if (this.head === null) return "null";
    let resString = "";
    let headCopy = this.head;
    while (headCopy !== null) {
      resString += headCopy.value + " -> ";
      headCopy = headCopy.next as Node;
    }
    return resString + "null";
  }
}

// const ll = new LinkedList();
// ll.append(2);
// ll.prepend(4);
// ll.append(3);
// console.log(ll.toString());
