
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
}