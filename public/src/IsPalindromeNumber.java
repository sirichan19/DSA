class IsPalindromeNumber {
    public static void main(String[] args) {
        int num = 1234;
        int reversedNumber = 0;

        while(num != 0)
        {
            int remainder = num % 10;
            reversedNumber = reversedNumber * 10 + remainder;
            num = num / 10;
        }

        System.out.println("Reversed number is: " + reversedNumber);
        checkIsPalindrome(num, reversedNumber);

 
}

public static boolean checkIsPalindrome(int number, int reversedNumber){
    if(number == reversedNumber){
        System.out.println("The number is a palindrome");
        return true;
    }
    System.out.println("The number is not a palindrome");
    return false;
}
}