// 2824. Count Pairs Whose Sum is Less than Target
var countPairs = function(nums, target) {
    let op =0;
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]+nums[j]<target){
                op++;
            }
        }
    }
    return op;
};

//runtime beats 97.30 % of javascript submissions.