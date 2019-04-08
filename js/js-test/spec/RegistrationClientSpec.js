/**
 * RegistrationClientSpec is used for testing the RegistrationClient, it performs unit
 * testing on the following functionalities:
 * // validation of empty username and password.
 * // validation of matched passwords
 * // validating that the username is in an email form.
 * // validating that the password  contains at least one digit, one capital and small character
 * and at least one special character, and 6 characters or more ...
 * // The user registration functionality is done correctly.
 */
describe("RegistrationClientSpec", function() {
    var registrationClient;
    var registrationForm;
    var userName;
    // jasmine.getFixtures().fixturesPath = 'base/js-test/spec/javacripts/fixtures';

    beforeEach(function() {
        // loadFixtures('base/js-test/spec/javacripts/fixtures/registrationFixture.html');
        jasmine.getFixtures().set(
            `<label for="username">Username (Email)  <span id="usernameMessage" class="error"></span></label>
            <input type="text" id="username" name="username"/>
            
            <label for="password1">Password  <span id="passwordMessage1" class="error"></span></label>
            <input type="password" id="password1" name="password1"/>
            
            <label for="password2">Confirm your password</label>
            <input type="password" id="password2" name="password2"/>`
        )

        registrationClient = new weatherapp.RegistrationClient();

        registrationForm = {
                "userNameField" : "username",
                "passwordField1" : "password1",
                "passwordField2" : "password2",
                "userNameMessage" : "usernameMessage",
                "passwordMessage1" : "passwordMessage1"
        };
        
    });

    describe("when validating empty username and password", function() {
        it("should be able to display an error message when username is not entered", function() {
            document.getElementById("username").value = ""; /* setting username to empty */
            document.getElementById("password1").value = "Admin@123";
            document.getElementById("password2").value = "Admin@123";

            registrationClient.validateRegistrationForm(registrationForm);

            expect(document.getElementById("usernameMessage").innerHTML).toEqual("(field is required)");
        });

        it("should be able to display an error message when password is not entered", function() {
            document.getElementById("username").value = "someone@someDomain.com";
            document.getElementById("password1").value = ""; /* setting password to empty */
            document.getElementById("password2").value = "";

            registrationClient.validateRegistrationForm(registrationForm);

            expect(document.getElementById("passwordMessage1").innerHTML).toEqual("(field is required)");
        });
    });

    describe("when validating matched passwords", function() {
        it("should be able to display an error message when passwords are not matched", function() {
            document.getElementById("username").value = "someone@someDomain.com";
            document.getElementById("password1").value = "Admin@123"; /* setting passwords unmatched */
            document.getElementById("password2").value = "Admins@123";

            registrationClient.validateRegistrationForm(registrationForm);

            expect(document.getElementById("passwordMessage1").innerHTML).toEqual("(Passwords must be identical)");
        });
    });

    describe("when validating username format", function() {
        it("should be able to display an error message when username format is not correct", function() {
            document.getElementById("username").value = "someone@someDomain";  /* setting username to invalid format */
            document.getElementById("password1").value = "Admin@123";
            document.getElementById("password2").value = "Admin@123";

            registrationClient.validateRegistrationForm(registrationForm);

            expect(document.getElementById("usernameMessage").innerHTML).toEqual("(format is invalid)");
        });
    });

    describe("when validating password format", function() {
        it("should be able to display an error message when password format is not correct", function() {
            document.getElementById("username").value = "someone@someDomain.com";
            document.getElementById("password1").value = "Admin123"; /* setting password to invalid format */
            document.getElementById("password2").value = "Admin123";

            registrationClient.validateRegistrationForm(registrationForm);

            expect(document.getElementById("passwordMessage1").innerHTML).toEqual("(format is invalid)");
        });
    });

    describe("when user registration is done", function() {
        // it("should be able to register valid user correctly", function() {
        it("should be able to register valid user correctly", function(done) {
            userName = "hazems" + new Date().getTime() + "@apache.org";

            document.getElementById("username").value = userName;
            document.getElementById("password1").value = "Admin@123";
            document.getElementById("password2").value = "Admin@123";

            var successCallBack = jasmine.createSpy('successCallBack');
            var failureCallBack = jasmine.createSpy('failureCallBack');

            registrationClient.registerUser(registrationForm, successCallBack, failureCallBack);

            /* 
             * Jasmine 2.0 removed 'WaitsFor/run', and we used a plugin 'waitsForAndRuns.js'
             *
            waitsFor(function() {
                return successCallBack.callCount > 0;
            }, "registration never completed", 10000);

            runs(function() {
                expect(successCallBack).toHaveBeenCalled();
                expect(failureCallBack).not.toHaveBeenCalled();
            }); 
            */
            waitsForAndRuns(
                function(){
                    return successCallBack.calls.count();
                    // Jasmine 2.0 replaced '.callCount' with '.calls.count()'
                    // return successCallBack.callCount > 0;
                },
                function(){
                    /* '.calls.any()' returns 'true' if atleast one call happens
                     * I used '.calls.any()' to confirm if the spy was called
                     * Then expect successCallBack to have been called
                     * And don't expect failureCallBack to have been called at all.
                     */
                    expect(successCallBack.calls.any()).toEqual(true);
                    expect(successCallBack).toHaveBeenCalled();
                    expect(failureCallBack).not.toHaveBeenCalled();
                    done();
                }, 
            10000);
            
        });

        it("should fail when a specific user id is already registered", function(done) {
            document.getElementById("username").value = userName;
            document.getElementById("password1").value = "Admin@123";
            document.getElementById("password2").value = "Admin@123";

            var successCallBack = jasmine.createSpy();
            var failureCallBack = jasmine.createSpy();

            registrationClient.registerUser(registrationForm, successCallBack, failureCallBack);

            /*
             * To understand the changes here, refer to the above 'spec' to validate user
             *
            waitsFor(function() {
                return failureCallBack.callCount > 0;
            }, "registration never completed", 10000);

            runs(function() {
                expect(failureCallBack).toHaveBeenCalled();
                expect(failureCallBack.mostRecentCall.args[0].xmlhttp.responseText, "A user with the same username is already registered ...");
                expect(successCallBack).not.toHaveBeenCalled();
            });
             */
            waitsForAndRuns(
                function(){
                    return failureCallBack.calls.count();
                },
                function(){
                    /*
                     * Jasmine 2.0 replaced 'mostRecentCall' with '.calls.mostRecent()'
                     * 'calls.mostRecent()' returns the context (the 'this') and arguments for the most recent call
                     * '.args[0]' returns the first call argument, and places in the '.xmlhttp.responseText'
                     * And we don't expect successCallBack to have been called at all
                     */
                    expect(failureCallBack.calls.any()).toEqual(true);
                    expect(failureCallBack.calls.mostRecent().args[0].xmlhttp.reponsetext, "A user with the same username is already registered ...");
                    expect(successCallBack).not.toHaveBeenCalled();
                    done();
                }, 
            10000 );
        });

    });
});