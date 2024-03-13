// 2108. Find First Palindromic String in the Array

var firstPalindrome = function(words) {
    for(let i=0; i<words.length; i++){
        if(words[i] === words[i].split('').reverse().join('')){
            return words[i];
        }
    }
    return "";
};