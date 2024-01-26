// 9. Palindrome Number
var isPalindrome = function(x) {
    const digitArray = Array.from(x.toString()).map(Number)
    let palCheck = [];
    for(let i=digitArray.length; i>=0; i--){
        palCheck.push(digitArray[i]);
    }
    const number = parseInt(digitArray.join(''));
    const revNumber = parseInt(palCheck.join(''));
    if(number === revNumber){
        return true;
    }else{
        return false;
    }
};