// 1470. Shuffle the Array

var shuffle = function(nums, n) {
    // 2,5,1, | 3,4,7 => 2,3,5,4,1,7
    // 1,2,3,4 | 4,3,2,1 => 1,4,2,3,3,2,4,1

    let x = [];
    for(let i=0; i<n; i++){
        x.push(nums[i]);
    }
    let y = [];
    for(let i=n; i<nums.length; i++){
        y.push(nums[i]);
    }

    let soln = [];
    for(let i=0; i<nums.length/2; i++){
        soln.push(x[i]);
        soln.push(y[i]);
    }

    return soln;
};