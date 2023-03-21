import java.util.ArrayList;

public class BinarySearch {
  public static void main() {
  }

  public static int binarySearch(ArrayList<Integer> arr, int target) {
    if (arr.size() == 0) {
      return -1;
    }

    int right = 0;
    int left = arr.size() - 1;

    while (left <= right) {
      final int mid = (int) Math.floor((right + left) / 2);
      final int guess = arr.get(mid);
      if (guess == target) {
        return mid;
      }
      if (guess > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return -1;
  }
}
