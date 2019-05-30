
(function () {
    'use strict';

    /**
     * 
     * Custom Spy
     * 
     * To understand how to write Jasmine tests with your own custom method, 
     * let's consider a few more scenarios as follows, 
     * // Scenario-1: Person with O+ blood group can receive blood from a person with O+ blood group
     * // Scenario 2: Person with O+ blood group can give blood to a person with A+ blood group
     * // Scenario 3: Person with B- blood group can receive blood from a person with B- blood group
     * // Scenario 4: Person with B- blood group can receive blood from a person with O- blood group
     */

    describe("<MwamiTovi> Company: Health Care Solution, ", function() {
        describe("When to donate or receive blood, ", function() {
            describe("Person with O+ Blood Group: ", function(){
                it("can receive blood from a person with O+ blood group", function(){
                    var testPersonCriteria = new Person("Wasswa Ddumba", "10/30/1975", "O+", "Receiver");
                    spyOn(testPersonCriteria, "MatchBloodGroupToGiveOrReceive").and.callThrough();

                    var callback = jasmine.createSpy();
                    testPersonCriteria.ValidateBloodGroup(callback);
                    // verify that if or not callback method is called
                    expect(callback).toHaveBeenCalled();
                    expect(callback.calls.any()).toEqual(true);
                    expect(callback.calls.count()).toEqual(1);

                    // verify if MatchBloodGroupTOGiveOrReceive() is called, and
                    // check if control goes back to the function
                    expect(testPersonCriteria.MatchBloodGroupToGiveOrReceive).toHaveBeenCalled();
                    expect(testPersonCriteria.MatchBloodGroupToGiveOrReceive.calls.any()).toEqual(true);
                    expect(testPersonCriteria.MatchBloodGroupToGiveOrReceive.calls.count()).toEqual(1);
                    expect(testPersonCriteria.ValidateBloodGroup(callback)).toContain("O+");
                });
                it("can give blood to a person with A+ blood group", function(){
                });
            });
        });
    });

})();

