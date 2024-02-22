// 2942. Find Words Containing Character

var findWordsContaining = function(words, x) {
    let wordArr = [];
    for(let i=0; i<words.length; i++){
      if(words[i].includes(x)){
        wordArr.push(i);
      }
    }
  return wordArr;
};