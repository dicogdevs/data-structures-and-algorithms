export default class Node<T> {
  constructor(private _data: T) {}

  set data(value: T) {
    this._data = value;
  }

  get data() {
    return this._data;
  }
}
