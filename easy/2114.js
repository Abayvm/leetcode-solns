// 2114. Maximum Number of Words Found in Sentences

var mostWordsFound = function(sentences) {
    let result = 0;
    for(let i = 0; i < sentences.length; i++) {
        let sentenceWords = sentences[i].split(" ");
        if (sentenceWords.length > result) {
            result = sentenceWords.length;
        }
    }
    return result;
};
