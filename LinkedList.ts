import Node from "./Node";
export default class LinkedList {
  _head: Node | null;

  constructor(head: Node) {
    this._head = head;
  }

  get head() {
    return this.head;
  }

  set head(head: Node) {
    this._head = head;
  }
}
