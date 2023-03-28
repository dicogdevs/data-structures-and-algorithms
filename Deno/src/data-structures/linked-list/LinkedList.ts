'use strict';
import LinkedNode from '../linked-node/LinkedNode.ts';

export default class LinkedList<T> {
  #head: LinkedNode<T> | null;
  #tail: LinkedNode<T> | null;
  constructor() {
    this.#head = null;
    this.#tail = null;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  isEmpty() {
    return !this.head && !this.tail;
  }

  setBoth(value: LinkedNode<T> | null) {
    this.#head = value;
    this.#tail = value;
  }

  addOneToHead(linkedNode: LinkedNode<T>) {
    linkedNode.edge.to = this.head;
    this.#head = linkedNode;
  }

  addOneToTail(linkedNode: LinkedNode<T>) {
    this.tail!.edge.to = linkedNode;
    this.#tail = linkedNode;
  }

  addHead(value: T) {
    this.addInstruction(value, this.addOneToHead);
  }

  addTail(value: T) {
    this.addInstruction(value, this.addOneToTail);
  }

  addInstruction(value: T, blockCode: (linkedNode: LinkedNode<T>) => void) {
    const linkedNode = new LinkedNode(value);
    if (this.isEmpty()) {
      this.setBoth(linkedNode);
    } else {
      const boundBlockCode = blockCode.bind(this);
      boundBlockCode(linkedNode);
    }
  }
  /**
   * Remove the node at the head of the list and return its data
   * @returns the actual head's value or undefined if there isn't head
   */
  removeHead(): T | undefined {
    if (this.isEmpty()) return undefined;

    const value = this.head!.data;
    if (this.head === this.tail) this.setBoth(null);
    else this.#head = this.head!.edge.to;

    return value;
  }

  /**
   * Remove the node at the tail of the list and return its data
   * @returns the actual tail's value or undefined if there isn't head
   */
  removeTail(): T | undefined {
    if (this.isEmpty()) return undefined;
    const value = this.head!.data;
    if (this.head === this.tail) this.setBoth(null);
    else {
      let penultimateLinkedNode = this.head;
      while (penultimateLinkedNode!.edge.to != this.tail) {
        penultimateLinkedNode = penultimateLinkedNode!.edge.to;
      }
      penultimateLinkedNode!.edge.to = null;
      this.#tail = penultimateLinkedNode;
    }
    return value;
  }
}
