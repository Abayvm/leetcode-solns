//2665. Counter II

var createCounter = function(init) {
    let result = init;
    var increment = function (){
        result +=1;
        return result;
    }
    var decrement = function (){
        result -=1;
        return result;
    }
    var reset = function (){
        result = init;
        return result;
    }
    return {
        increment,
        decrement,
        reset
    };
};