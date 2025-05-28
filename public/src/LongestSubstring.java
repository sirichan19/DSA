import java.util.HashSet;
import java.util.Set;

public class LongestSubstring {

    public static void main(String[] args) {
        
        String str =  "ddddddddddddddddd";
        char[] array = str.toCharArray();

        Set<Character> set = new HashSet<>();
        for (char c : array) {
            set.add(c);
        }
        System.out.println("Unique characters: " + set.size());

    }
    
}
