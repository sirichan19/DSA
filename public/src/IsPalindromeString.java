public class IsPalindromeString {

    public static void main(String[] args) {
    String text = "madam";
    String reversedtext = "";

    for (int i = text.length()-1 ; i >= 0 ; i--){
        reversedtext += text.charAt(i);
    }
    System.out.println(reversedtext);

    checkIsPalindrome(text, reversedtext);
        }
    
        public static boolean checkIsPalindrome(String text, String reversedtext){
        if(text.equals(reversedtext)){
            System.out.println("The string is a palindrome");
            return true;
    }

    return false;

}
}

