public class Node<T> {
  private T _data;

  Node(T data) {
    this._data = data;
  }

  void setData(T _data) {
    this._data = _data;
  }

  T getData() {
    return this._data;
  }

}
