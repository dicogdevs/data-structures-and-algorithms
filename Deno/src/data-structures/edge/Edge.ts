import LinkedNode from "../linked-node/LinkedNode.ts";
export default class Edge<T> {
  constructor(private _to: LinkedNode<T> | null) {
  }

  set to(value: LinkedNode<T> | null) {
    this._to = value;
  }

  get to() {
    return this._to;
  }
}
