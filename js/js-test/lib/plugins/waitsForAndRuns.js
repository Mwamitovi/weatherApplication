
// credit: abreckner (gist.github.com/abreckner)
// This is the equivalent of the old waitsFor/runs syntax which was removed from Jasmine 2.0+

waitsForAndRuns = function(escapeFunction, runFunction, escapeTime) {
    // check the escapeFunction every milliseconds,
    // so as soon as it is met, we can escape the function
    var interval = setInterval(function() {
        if(escapeFunction()){
            clearMe();
            runFunction();
        }
    }, 1);
    
    // In case we never reaach the escapeFunction,
    // we will time out at the escapeTime
    var timeOut = setTimeout(function() {
        clearMe();
        runFunction();
    }, escapeTime);
    
    // clear the interval and the timeOut
    function clearMe(){
        clearInterval(interval);
        clearTimeout(timeOut);
    }
};