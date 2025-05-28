let num = 12345;
function reverseNumber(){
    let reversedNum = "";

    while (num > 0) {
        let digit : string = (num % 10).toString();
        reversedNum += digit;
        num = Math.floor(num / 10);
    }

    console.log(reversedNum);
    
((reversedNum === num.toString()) ? console.log("Palindrome") : console.log("Not Palindrome"));
}

let reversedNum = reverseNumber();

// function isPalindrome(num: number): boolean {
