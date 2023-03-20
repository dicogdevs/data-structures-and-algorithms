import java.util.ArrayList;

public class App {
    public static void main(String[] args) throws Exception {
        final ArrayList<Integer> arr = new ArrayList<Integer>();
        arr.add(1);
        arr.add(2);
        arr.add(3);
        arr.add(4);
        final int target = 66;
        final String result = String.format("The Target '%s' is in the arr at the position %s.", target,
                BinarySearch.binarySearch(arr, target));
        System.out.println(result);
    }
}
