// 1662. Check If Two String Arrays are Equivalent

var arrayStringsAreEqual = function(word1, word2) {
    let str1 = word1.join('');
    let str2 = word2.join('');
    return str1 === str2;
};

// beats 100.00 % of javascript submissions.