
(function () {
    'use strict';

    /**
     * Changing business rules 
     * (refer to "customMatcherSpec.js" for original business rules)
     * 
     * Let's consider these scenarios as per the new business rules,
     * // Scenario-1: Age is not a criteria to place the online order
     * // Scenario-2: Only the first name is required to place the online order
     */
   
    // Understanding pending specs
    describe('<MwamiTovi> Company: Online Order Module', function() {
        beforeEach(function(){
            jasmine.addMatchers(personAgeValidationMatcher);
            jasmine.addMatchers(personNameValidationMatcher);
        });
        // Scenario-1
        xdescribe('Given: Age is not a criteria to place the online order', function() {
            it('Age should be greater than or equal to 21 years', function() {
                var myPerson = new Person(32, 'Martin', 'Matovu');
                expect(myPerson.age).toBeOlderThan(21);
            });
        });  
        // Scenario-2
        // test-case marked with 'x' before declaration
        xit("First Name and Last Name are required to place the online order", function() {
            var myPerson = new Person(32, 'Martin', 'Matovu');
            expect(myPerson).toContainFirstAndLastName();
        });
        // test-case without function body
        it("First Name and Last Name are required to place the online order");
        // test-case with pending()
        it("First Name and Last Name are required to place the online order", function() {
            pending();
            var myPerson = new Person(32, 'Martin', 'Matovu');
            expect(myPerson).toContainFirstAndLastName();
        });
        // Implementing a passing test-case for scenario-2
        it("First Name and Last Name are required to place the online order", function() {
            var myPerson = new Person(20, 'Lydia');
            expect(myPerson).toContainOneName();
        });
    });

    /**
     * Custom matcher functions
     */

    var personAgeValidationMatcher = {
        toBeOlderThan: function() {
            return {
                compare: function(actualAge, expectedAge) {
                    if(expectedAge === undefined) { 
                        throw "Expected value is required"; 
                    }
                    if(actualAge >= expectedAge) { 
                        return {
                            pass: true,
                            message: 'Person is eligible to place an online order'
                        }; 
                    } 
                    else { 
                        return {
                            pass: false,
                            message: "Minimum person's age should be 21 years to place an online order"
                        }; 
                    };
                }
            };
        }
    };


    var personNameValidationMatcher = {
        toContainFirstAndLastName: function() {
            return {
                compare: function(actual) {
                    if(actual.firstName != undefined && actual.secondName != undefined) {
                        return {
                            pass: true,
                            message: 'Person is eligible to place an order'
                        };
                    }
                    else {
                        return {
                            pass: false,
                            message: 'First name and Last name are needed to process the order'
                        };
                    };
                }
            };
        },
        toContainOneName: function() {
            return {
                compare: function(actual) {
                    if(actual.firstName != undefined || actual.secondName != undefined) {
                        return {
                            pass: true,
                            message: 'You are eligible to place an order'
                        };
                    }
                    else {
                        return {
                            pass: false,
                            message: 'Atleast one name is needed to process the order'
                        };
                    };
                }
            };
        }
    };

})();

