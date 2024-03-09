// 2535. Difference Between Element Sum and Digit Sum of an Array

var differenceOfSum = function(nums) {

    let elementSumOfNums = 0;
    for(let i=0; i<nums.length; i++){
        elementSumOfNums+=nums[i];
    }

    let numstr = nums.join('');
    let digits = numstr.toString().split('').map(Number);
    let digitSumOfNums = 0;

    for(let j=0; j<digits.length; j++){
        digitSumOfNums+=digits[j]; 
    }

    let absDiff = elementSumOfNums - digitSumOfNums;
    
    return absDiff;
    
};