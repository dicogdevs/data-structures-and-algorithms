export default function binary_search(arr: number[], target: number): number {
  if (arr.length === 0) return -1;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const guess = arr[mid];

    if (guess === target) return mid;
    if (guess > target) right = mid - 1;
    else left = mid + 1;
  }

  return -1;
}
