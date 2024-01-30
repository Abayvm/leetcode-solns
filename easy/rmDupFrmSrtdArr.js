//26. Remove Duplicates from Sorted Array

var removeDuplicates = function(nums) {
    let k = 0;
        for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k]) {
            k++;
            nums[k] = nums[i];
        }
    }

    nums.length = k + 1;
    return k + 1;
};

//runtime beats 92.68 % of javascript submissions.