// 1431. Kids With the Greatest Number of Candies


var kidsWithCandies = function(candies, extraCandies) {
    let resultArr = [];
    for(let  i=0; i<candies.length; i++){
        let totalCandies = candies[i]+extraCandies;
        let hasMoreCandies = true;
        for(let j=0; j<candies.length; j++){
            if(totalCandies < candies[j] && i !== j){
                hasMoreCandies = false;
                break;
            }
        }
        resultArr.push(hasMoreCandies);
    }
    return resultArr;
};