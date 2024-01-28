//283. Move Zeroes

var moveZeroes = function(nums) {
    if(!Array .isArray(nums)){
        return "Invalid input!";
    }
    for (let i = 0, nonZeroIndex = 0; i < nums.length; i++) {
        if (typeof nums[i] !== 'number') {
            return "Invalid items in array!";
        }

        if (nums[i] !== 0) {
            [nums[i], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[i]];
            nonZeroIndex++;
        }
    }

    return nums;
};