import LinkedNode from "../../../linked-node/Deno/src/LinkedNode.ts";
import Edge from "./Edge.ts";

function main() {
  console.log(new Edge(4, new LinkedNode(4)));
}

main();
