//217. Contains Duplicate

var containsDuplicate = function(nums) {
    for(let i=0; i<nums.length; i++){
        if(nums[i] === nums[i+1]){
            return true;
        }
    }
    return false;
};