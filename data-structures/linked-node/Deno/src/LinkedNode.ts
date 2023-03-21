import Node from "../../../node/Deno/src/Node.ts";
import Edge from "../../../edge/Deno/src/Edge.ts";

export default class LinkedNode<T> extends Node<T> {
  private _edge: Edge | null;

  constructor(value: T) {
    super(value);
    this._edge = null;
  }

  set edge(value: Edge | null) {
    this._edge = value;
  }

  get edge() {
    return this._edge;
  }
}
