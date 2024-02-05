//66. Plus One

var plusOne = function(digits) {
    let lastnum = digits.pop;
    lastnum += 1;
    digits.push(lastnum);
    return digits;
}