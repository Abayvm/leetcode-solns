//1365. How Many Numbers Are Smaller Than the Current Number

var smallerNumbersThanCurrent = function(nums) {
    let smallerArr = [];
    for(let i=0; i<nums.length; i++){
        let smallNums = 0;
        for(let j=0; j<nums.length; j++){
            if(nums[j]<nums[i]){
                smallNums +=1;
            }
        }
        smallerArr.push(smallNums);
    }
    return smallerArr;
};

//runtime beats 84.24 % of javascript submissions.