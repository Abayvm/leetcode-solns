//2011. Final Value of Variable After Performing Operations

var finalValueAfterOperations = function(operations) {
    x = 0;
    for(let i=0; i<operations.length; i++){
        if(operations[i] === 'X++' || operations[i] === '++X'){
            x++;
        }
        else if(operations[i] === 'X--' || operations[i] === '--X'){
            x--;
        }
    }
    return x;
};