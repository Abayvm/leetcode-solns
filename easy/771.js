// 771. Jewels and Stones

var numJewelsInStones = function(jewels, stones) {
    let op = 0;
    const jewelArr = jewels.split('');
    const stoneArr = stones.split('');
    for(let i=0; i<jewelArr.length; i++){
        for(let j=0; j<stoneArr.length; j++){
            if(jewelArr[i] === stoneArr[j]){
                op+=1;
            }
        }
    }
    return op;
};