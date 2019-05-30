
const Person = function(name, DOB, bloodgroup, donor_receiver){
    this.myName = name || "Martin Matovu";
    this.myDOB = DOB || "02/10/1987";
    this.myBloodGroup = bloodgroup || "A+";
    this.donor_receiver = donor_receiver;
    this.ValidateAge = function(myDOB){
        this.myDOB = myDOB || DOB;
        return this.getAge(this.DOB);
    };
    this.ValidateHIV = function(personName, personDOB, personBloodGroup){
        this.myName = personName || this.myName;
        this.myDOB = personDOB || this.myDOB;
        this.myBloodGroup = personBloodGroup || this.myBloodGroup;
        return this.checkHIV(this.myName, this.myDOB, this.myBloodGroup);
    };
    this.ValidateBloodGroup = function(callback){
        var _this = this;
        var matchBloodGroup;
        this.MatchBloodGroupToGiveOrReceive(function(personBloodGroup){
            _this.personBloodGroup = personBloodGroup;
            matchBloodGroup = personBloodGroup;
            callback.call(_this, _this.personBloodGroup);
        });
        return matchBloodGroup;
    };
};


Person.prototype.getAge = function(birth){
    console.log("getAge() function has been called");
    let calculatedAge = 0;
    // logic to calculate person's age will be implemented later
    if(calculatedAge < 18){
        throw new ValidationError("You must be 18years or older");
    };
    return calculatedAge;
};

Person.prototype.checkHIV = function(pName, pDOB, pBloodGroup){
    console.log("checkHIV() function has been called");
    bolHIVResult = true;
    // logic to verify HIV+ shall be implemented later
    if(bolHIVResult == true){
        throw new ValidationError("Unfortuantely, you are infected with HIV");
    };
    return bolHIVResult;
};


// Define custome error for validation
function ValidationError(message){
    this.message = message;
}

ValidationError.prototype = Object.create(Error.prototype);


// Match the various blood groups (donor-receiver)
Person.prototype.MatchBloodGroupToGiveOrReceive = function(callback){
    var matchBloodGroup;
    if(this.donor_receiver == null || this.donor_receiver == undefined){
        throw new ValidationError("Argument (donor_receiver) is missing!")
    };
    if(this.myBloodGroup == "O+" && this.donor_receiver.toUpperCase() == "RECEIVER"){
        matchBloodGroup = ["O+"];
    }
    else if(this.myBloodGroup == "O+" && this.donor_receiver.toUpperCase() == "DONOR"){
        matchBloodGroup = ["A+"];
    }
    else if(this.myBloodGroup == "B-" && this.donor_receiver.toUpperCase() == "RECEIVER"){
        matchBloodGroup = ["B-", "O-"];
    };
    callback.call(this, matchBloodGroup);
};
