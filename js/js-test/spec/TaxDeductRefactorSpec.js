
(function () {
    'use strict';

    /**
     * We are developing a payroll application for <MwamiTovi> company.
     * The employees of <MwamiTovi> company work in Uganda, UK, and the US.
     * As per immediate need, a Tax (that is, Tax Deduction at Source) module needs to be developed
     * to deduct an employee's tax in salary disbursement. There are different business rules that
     * exist for deducting tax across different countries.
     * 
     * The payroll administrator, wants to calculate an employee's tax on salary disbursement 
     * so that they can evaluate the exact tax.
     * 
     * Let's consider scenarios where an employee's tax should be deducted on salary disbursement:
     * // Scenario-1: Tax should be deducted in currency USH (Uganda Shilling, Ushs) for Ugandan employees
     * // Scenario-2: Tax should be deducted in currency GBP (British Pound, UK £) for UK employees
     * // Scenario-3: Tax should be deducted in currency USD (US Dollar, $) for US employees
     * // Scenario-4: Tax of Ugandan employees should be deducted by 10 percent,
     *                if gross taxable income is between Ushs. 250,000 and Ushs. 500,000
     */
   
    /**
     * Refactoring the BDD (Behaviour-Driven Development) process, for existing code
     * 
     * Define all our scenarios in the Given/When/Then format, from the BDD prespective
     * 
     * // Scenario-1, Given: Employees of the Company, 
     *                 When: Tax deducted for Ugandan employee,
     *                 Then: Currency should be used USH (Uganda Shilling, Ushs)
     * 
     * // Scenario-2, Given: Employees of the Company,
     *                 When: Tax deducted for UK employee,
     *                 Then: Currency should be used GBP (British Pound, UK £)
     * 
     * // Scenario-3, Given: Employees of the Company,
     *                 When: Tax deducted for U.S employee,
     *                 Then: Currency should be USD (US $)
     * 
     * // Scenario-4, Given: Employees of the Company,
     *                 When: Tax deducted for Ugandan employee,
     *                 Then: Should be deducted 10 %, if Gross Income is between Ushs.250,000 & Ushs.500,000
     *
     * // Scenario-5(1), Given: Employees of the Company,
     *                    When: Tax deducted for Ugandan employee,
     *                    Then: Should be deducted 20 %, if Gross Income is between Ushs.500,000 & Ushs.1,000,000
     *
     * // Scenario-6(2), Given: Employees of the Company,
     *                    When: Tax deducted for Ugandan employee,
     *                    Then: Should be deducted 30 %, if Gross Income is more than Ushs.1,000,000
     *
     */
    
    // Refactoring Jasmine tests for "existing code" using TDD/BDD
    describe('Employess of <MwamiTovi> Company:', function() {
        // Scenario-1
        describe('Tax deducted for Ugandan Employess, ', function() {
            it('USH (Shilling, Ushs) currency should be used', function() {
                var myCurrency = new Currency("UGANDA");
                expect(myCurrency.currency).toBe("Ushs");
            });
            // Scenario-4
            it("Should be 10%, if Gross Income is between USH.250,000/- and USH.500,000/-", function(){
                var myTaxableIncome = new TaxUgandanEmp();
                //Let's assume the taxable income is USH.300,000/-
                myTaxableIncome.setIncome(300000);
                expect(myTaxableIncome.calculateTDS()).toEqual(5000);
            });

            // Scenario-5 (1)
            it("Should be deducted 20% if Gross Income is between USH.500,000/- and USH.1,000,000/-", function(){
                var myTaxableIncome = new TaxUgandanEmp();
                //Let's assume the taxable income is USH.700,000/-
                myTaxableIncome.setIncome(700000);
                expect(myTaxableIncome.calculateTDS()).toEqual(40000);                
            });
            
            // Scenario-6 (2)
            it("Should be deducted 30% if Gross Income is >USH.1,000,000/-", function(){
                var myTaxableIncome = new TaxUgandanEmp();
                //Let's assume the taxable income is USH.1,300,000/-
                myTaxableIncome.setIncome(1300000);
                expect(myTaxableIncome.calculateTDS()).toEqual(90000);                
            });
        });

        // Scenario-2
        describe('Tax deducted for United Kingdom Employess, ', function() {
            it('GBP (Pound, UK£) currency should be used', function() {
                var myCurrency = new Currency("UK");
                expect(myCurrency.currency).toBe("UK£");
            });
        });

        // Scenario-2
        describe('Tax deducted for United States Employess, ', function() {
            it('USD (Dollar, US$) currency should be used', function() {
                var myCurrency = new Currency("US");
                expect(myCurrency.currency).toBe("US$");
            });
        });
    });

})();