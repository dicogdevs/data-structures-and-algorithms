import LinkedNode from "../linked-node/LinkedNode.ts";

export default class LinkedList<T> {
  private _head: LinkedNode<T> | null;
  private _tail: LinkedNode<T> | null;
  constructor() {
    this._head = null;
    this._tail = null;
  }

  set head(value: LinkedNode<T> | null) {
    this._head = value;
  }

  get head() {
    return this._head;
  }

  set tail(value: LinkedNode<T> | null) {
    this._tail = value;
  }

  get tail() {
    return this._tail;
  }

  isEmpty() {
    return !this.head && !this.tail;
  }

  setBoth(value: LinkedNode<T> | null) {
    this.head = value;
    this.tail = value;
  }

  addOneToHead(
    linkedNode: LinkedNode<T>,
  ) {
    linkedNode.edge.to = this.head;
    this.head = linkedNode;
  }

  addHead(value: T) {
    const linkedNode = new LinkedNode(value);

    if (this.isEmpty()) {
      this.setBoth(linkedNode);
    } else {
      this.addOneToHead(linkedNode);
    }
  }

  addTail(value: T) {
    const linkedNode = new LinkedNode(value);
    if (this.isEmpty()) {
      this.setBoth(linkedNode);
    } else {
      this.tail = this.addOneToHead(linkedNode);
    }
  }

  /**
   * Remove the node at the head of the list and return its data
   * @returns the actual head's value or undefined if there isn't head
   */
  removeHead(): T | undefined {
    if (!this.head) return undefined;

    const value = this.head.data;
    // If the head isn't the only node in the list, set the actual head's next to head
    if (this.head.edge.to) this.head = this.head.edge.to;
    else {
      // If the head is the only node in the list, set both head and tail to null
      this.head = null;
      this.tail = null;
    }
    return value;
  }

  /**
   * Remove the node at the tail of the list and return its data
   * @returns the actual tail's value or undefined if there isn't head
   */
  removeTail(): T | undefined {
    if (!this.tail || !this.head) return undefined;
    const value = this.tail.data;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let newTail: LinkedNode<T> = this.head;
      while (newTail.edge.to) {
        newTail = newTail.edge.to;
      }
      newTail.edge.to = null;
      this.tail = newTail;
      return value;
    }
  }
}
