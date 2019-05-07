
'use strict';

// defining a new function
function validateCreditCardNumber(number) {
    // if(number.length == 16) {
    //     return (true);
    // } else {
    //     return (false);
    // }
    return (number.replace(/-/g,'').length === 16);
}
