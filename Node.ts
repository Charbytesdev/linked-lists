export default class Node {
  _value: number | null = null;
  _next: Node | null = null;

  constructor(value: number | null = null, next: Node | null = null) {
    this._value = value;
    this._next = next;
  }

  get value() {
    return this._value;
  }

  get next() {
    return this._next;
  }

  set value(value: number | null) {
    this._value = value;
  }

  set next(next: Node | null) {
    this._next = next;
  }
}
