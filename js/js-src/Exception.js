
"use strict";

function addTwonumbers(num1, num2) {
    return num1 + num2;
};


function generateMaxValue(maxValue) {
    var intVar = maxValue;
    if(intVar === undefined) {
        throw new ParameterException("No value is assigned to variable intVar!");
    }
    intVar++;
    if(maxValue<1 || maxValue>1000) {
        throw new ArgumentOutOfRangeException("Maximum value should be between 0 and 1000");
    }
    return intVar;
}


function ParameterException(message) {
    this.name = "ParameterException";
    this.message = message || "Default Message";
}


ParameterException.prototype = Object.create(Error.prototype);

ParameterException.prototype.constructor = ParameterException;


function ArgumentOutOfRangeException(message) {
    this.name = "ArgumentOutOfRangeException";
    this.message = message || "Default Message";
}


ArgumentOutOfRangeException.prototype = Object.create(Error.prototype);

ArgumentOutOfRangeException.prototype.constructor = ArgumentOutOfRangeException;
