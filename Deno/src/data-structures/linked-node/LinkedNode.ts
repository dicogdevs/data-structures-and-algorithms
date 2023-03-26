import Node from "../node/Node.ts";
import Edge from "../edge/Edge.ts";

export default class LinkedNode<T> extends Node<T> {
  private _edge: Edge<T>;

  constructor(value: T) {
    super(value);
    this._edge = new Edge(null);
  }

  set edge(value: Edge<T>) {
    this._edge = value;
  }

  get edge() {
    return this._edge;
  }
}
