// 88. Merge Sorted Array

var merge = function(nums1, m, nums2, n) {
    let numArr1 = nums1.slice(0, m);
    let numArr2 = nums2.slice(0, n);
    let numArray = numArr1.concat(numArr2);
    const sortedArr = [];
    for(let i = 0; i < numArray.length; i++) {
        let min = i;
        for(let j = i + 1; j < numArray.length; j++) {
            if(numArray[j] < numArray[min]) {
                min = j;
            }
        }
        if(min !== i) {
            let temp = numArray[i];
            numArray[i] = numArray[min];
            numArray[min] = temp;
        }
        sortedArr.push(numArray[i]);
    }
    for(let i = 0; i < numArray.length; i++) {
        nums1[i] = numArray[i];
    }
    return nums1;
};

//Not very efficient but does the thing