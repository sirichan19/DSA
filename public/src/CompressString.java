import java.util.HashMap;
import java.util.Map;

public class CompressString {

    public static void main(String[] args) {
        String str = "aaabbbbbbbcc";
        char[] array = str.toCharArray();
        Map<Character, Integer> map = new HashMap<>();
        int count = 0;
        
        
        for(int i=0; i < array.length; i++){
            if(map.containsKey(array[i])){
                count += 1;
                map.put(array[i], count);
            }
            else{
                count = 1;
                map.put(array[i], count);
            }
        }
        
        StringBuilder compressedString = new StringBuilder();
        for(Map.Entry<Character, Integer> entry: map.entrySet()){
            compressedString.append(entry.getKey()).append(entry.getValue());
        }

        System.out.println("Compressed String: " + compressedString.toString());
        System.out.println("Original String: " + str);
    }
    
}
