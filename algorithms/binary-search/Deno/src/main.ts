import binary_search from "./binary-search.ts";

function main() {
  const arr = [1, 2, 3, 4, 5, 6];
  const target = 6;
  const result = `Target "${target}" in the arr is at index ${
    binary_search(arr, target)
  }.`;
  console.log(result);
}

main();
