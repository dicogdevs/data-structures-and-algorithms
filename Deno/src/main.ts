import LinkedList from "./data-structures/linked-list/LinkedList.ts";

function main() {
  const linkedList = new LinkedList();
  linkedList.addTail(1);
  console.log(linkedList);

  linkedList.addTail(2);

  console.log(linkedList);
  console.log(linkedList.removeTail());
  console.log(linkedList.removeTail());
  console.log(linkedList);
}

main();
