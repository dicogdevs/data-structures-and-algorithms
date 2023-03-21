import Edge from "../../../edge/Deno/src/Edge.ts";
import LinkedNode from "./LinkedNode.ts";

function main() {
  const linkedNode = new LinkedNode("Diego");
  linkedNode.edge = new Edge(3, new LinkedNode("Jorge"));
  console.log(linkedNode);
}
main();
