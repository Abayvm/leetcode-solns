// 1588. Sum of All Odd Length Subarrays

var sumOddLengthSubarrays = function(arr) {
    let totalSum = 0;
    for (let start = 0; start < arr.length; start++) {
        let sum = 0;
        for (let end = start; end < arr.length; end++) {
            sum += arr[end];
            if ((end - start + 1) % 2 !== 0) {
                totalSum += sum;
            }
        }
    }
    return totalSum;
};