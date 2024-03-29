// 1528. Shuffle String

var restoreString = function(s, indices) {
    let result = "";
    for(let i=0; i<s.length; i++){
        result += s[indices.indexOf(i)];
    }
    return result;
};