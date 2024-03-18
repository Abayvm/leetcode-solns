// 1678. Goal Parser Interpretation

var interpret = function(command) {
    return command.replaceAll('()', 'o').replaceAll('(al)', 'al')
};