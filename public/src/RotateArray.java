import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class RotateArray {

    public static void main(String[] args) {
        
        List<Integer> arr = Arrays.asList(1, 2, 3, 4, 5, 6, 7);
        int rotateNum = 3;
        List<Integer> rotatedArray = new ArrayList<>();

        for(int i = arr.size()-rotateNum; i < arr.size(); i++){
            rotatedArray.add(arr.get(i));
        }

        for(int i = 0; i < arr.size()-rotateNum; i++){
            rotatedArray.add(arr.get(i));
        }

        System.out.println("Rotated Array: " + rotatedArray);
        System.out.println("Original Array: " + arr);
    }
    
}
