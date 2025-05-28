var num = 12345;
function reverseNumber() {
    var reversedNum = "";
    while (num > 0) {
        var digit = (num % 10).toString();
        reversedNum += digit;
        num = Math.floor(num / 10);
    }
    console.log(reversedNum);
    ((reversedNum === num.toString()) ? console.log("Palindrome") : console.log("Not Palindrome"));
}
var reversedNum = reverseNumber();
// function isPalindrome(num: number): boolean {
