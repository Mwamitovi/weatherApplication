
(function () {
    'use strict';

    /**
     * 
     * Spies (to mock JavaScript)
     * Assume you are developing a component that verifies a person's blood or organ donation details.
     * There are also a few factors/biological rules that exist to donate or receive blood.
     * 
     * "The doctor/physician, wants to validate all the factors/biological rules so that 
     * he/she can accept someone's blood for further usage"
     * 
     * Consider scenarios, all factors, that should be validated before receiving/donating the blood:
     * // Scenario-1: The person's age should be greater than or equal to 18
     * // Scenario-2: The person should not be HIV+
     * // Scenario-3: In Uganda, the person's age should be greater than or equal to 18
     */

    describe("<MwamiTovi> Company: Health Care Solution, ", function() {
        describe("When to donate or receive blood: ", function() {
            // scenario-1
            it("Person's age should be greater than or equal to 18 years", function() {
                var testPerson = new Person();
                // spyOn(testPerson, "getAge");
                // spyOn(testPerson, "getAge").and.callThrough();
                spyOn(testPerson, "getAge").and.callFake(function(){ return 18; });
                testPerson.getAge("02/10/1987");

                expect(testPerson.getAge).toHaveBeenCalled();
                expect(testPerson.getAge).toHaveBeenCalledWith("02/10/1987");
                expect(testPerson.getAge()).toEqual(18);
            });
            // scenario-2
            it("A person should not be infected with HIV", function() {
                var testPerson = new Person();
                spyOn(testPerson, "checkHIV");
                testPerson.ValidateHIV();

                expect(testPerson.checkHIV).toHaveBeenCalled();
            });
            // scenario-3
            it("In Uganda, the person's age should be greater than or equal to 20 years", function() {
                var testPerson = new Person();
                spyOn(testPerson, "getAge").and.returnValue(20);
                testPerson.ValidateAge("02/10/1987");

                expect(testPerson.getAge).toHaveBeenCalled();
                expect(testPerson.getAge()).toEqual(20);
            });
        });
    });

})();
