
'use strict';

// declaring Currency() function
function Currency(region) {    
    // this.currency = "Ushs";
    this.region = region;
    switch (this.region) {
        case "UGANDA":
            this.currency = "Ushs";
            break;
        case "UK":
            this.currency = "UK£";
            break;
        case "US":
            this.currency = "US$";
            break;
    };
};
