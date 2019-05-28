
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
                spyOn(testPerson, "getAge");
                testPerson.getAge("02/10/1987");

                expect(testPerson.getAge).toHaveBeenCalled();
                expect(testPerson.getAge).toHaveBeenCalledWith("02/10/1987");
            });           
        });
    });

})();

