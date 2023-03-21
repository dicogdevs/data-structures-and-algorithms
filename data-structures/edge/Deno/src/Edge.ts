import LinkedNode from "../../../linked-node/Deno/src/LinkedNode.ts";
export default class Edge {
  constructor(private _weight: number, private _to: LinkedNode<unknown>) {
  }

  set weight(value: number) {
    this._weight = value;
  }

  get weight() {
    return this._weight;
  }

  set to(value: LinkedNode<unknown>) {
    this._to = value;
  }

  get to() {
    return this._to;
  }
}
