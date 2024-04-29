// 242. Valid Anagram

var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    const sArray = s.split('');
    const tArray = t.split('');
    
    // Sort the arrays
    sArray.sort();
    tArray.sort();
    
    // Compare the sorted arrays
    return sArray.join('') === tArray.join('');
};