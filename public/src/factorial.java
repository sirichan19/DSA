public class factorial {
    public static void main(String[] args) {
        int number = 5;
        int fact = 1;

        for(int i= fact ; i <= number ; i++)
        {
            fact = fact *i ;
        }

        System.out.println("Factorial of " + number + " is: " + fact);
    }
}