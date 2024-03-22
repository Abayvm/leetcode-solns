//1512. Number of Good Pairs

var numIdenticalPairs = function(nums) {
    let op = 0;
    for(let i=0; i<nums.length; i++){
        for(let j=1; j<nums.length; j++){
            if(nums[i] == nums[j] && i < j){
            op+=1;
        }
        }
    }
    return op;
};