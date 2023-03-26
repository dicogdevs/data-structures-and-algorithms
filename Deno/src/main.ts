import LinkedList from "./data-structures/linked-list/LinkedList.ts";

function main() {
  const linkedList = new LinkedList();

  linkedList.addHead(1);
  linkedList.addHead(0);
  linkedList.addHead(-1);
  linkedList.addTail(2);
  let current = linkedList.head;
  while (current) {
    console.log(current);
    current = current.edge.to;
  }
}

main();
