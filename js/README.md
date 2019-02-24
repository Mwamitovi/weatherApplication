
Jasmine (JavaScript Unit Testing)
=================================

Using Jasmine with node.js
The Jasmine node package contains helper code for developing and running Jasmine tests for node-based projects.


## Initial setup

   - Assumptions: install node.js (it comes with npm package manager)
   - Install these dependencies: jquery, jasmine-jquery, yeoman, and generator-jasmine globally


### Get-Started

   - Run "yo jasmine" in the same root folder of your source files eg. weatherApplication/js
   - To avoid naming conflicts within the project, rename the generated "test" folder as follows:
        test/index.html -> js-test/SpecRunner.html, but leave the spec/ folder intact.
   - Now, launch "SpecRunner.html" to confirm that jasmine is successful.
   - Add the project source (*.js), test (*Spec.js) files,
        and plugins (jquery, jasmine-jquery, waitsForAndRuns) to the SpecRunner.html
   - To see the project tests, run https://localhost:9999/weatherApplication/js/js-test/SpecRunner.html


### Contribution guidelines
   - Gitflow remote collaboration model
   - Code review (pull requests)
   - Writing tests (Unit tests)
   - Other guidelines shall be issued with time.

### Who i talk to?
   - Contact: @MwamiTovi on Bitbucket or GitHub
   - Email directly: matovu.synergy@gmail.com