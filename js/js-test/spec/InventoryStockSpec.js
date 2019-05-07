
(function () {
    'use strict';
    
    /**
    * If <MwamiTovi> is a company developing software for sales and inventory control systems.
    * And currently, they have one base product that offers key features required of a sales & inventory system
    * (e.g, generating sales invoice, sales return/issue, billing management, budgeting, , stock update, e.t.c). 
    * They also customize base products as per customers' specific needs.
    * Recently, the <MwamiTovi> company has provided software to a spare parts company,
    * and the customer is performing acceptance testing for the inventory system.
    * 
    * The Store Administrator wants to update stock on every new transaction,
    * so that they can get the balance/stock in hand for further usage.
    * 
    * Let's therefore consider some scenarios to update inventory stock in the event of any transaction.
    * // Scenario-1: Inventory Stock should be updated on account of item(s) sale or issue of item(s)
    * // Scenario-2: Inventory stock should be updated on return of any item(s)
    * // Scenario-3: Inventory stocks should be updated on receiving/procuring new item(s)
    */

    // Writing specs for given requirements
    describe('Inventory Stock should be updated', function() {

        // var stockinhand_item1, item1;
        // We don't need to declare any variables, prior
        beforeEach(function() {
            // "this" initializes the variables
            this.stockinhand_item1 = 11, this.item1 = 1;
            console.log(
                "beforeEach: Stock in hand for item1 before spec execution = " + this.stockinhand_item1
            );
        });

        afterEach(function() {
            this.stockinhand_item1 = 0, this.item1 = 0;
            console.log(
                "afterEach: Stock in hand for item1 once spec executed = " + this.stockinhand_item1
            )
        });

        // Scenario-1
        it('On sale of an item', function() {
            this.transactionType = 'SALE';
            expect(this.stockinhand_item1 - this.item1).toEqual(10);
            expect(this.transactionType).toBeDefined();
        });
        it('On issue of an item within the organization', function() {
            // var transaction = 'ISSUE';
            expect(this.stockinhand_item1 - this.item1).toEqual(10)
            expect(this.transactionType).toBeUndefined();
        });

        // Scenario-2
        it('On return of an item', function() {
            // var transaction = 'SALE RETURN';
            expect(this.stockinhand_item1 + this.item1).toEqual(12);
            expect(this.transactionType).toBeUndefined();
        });

        // Scenario-3
        it('On receiving or procurring new item', function() {
            // var transaction = 'PROCUREMENT';
            expect(this.stockinhand_item1 + this.item1).toEqual(12);
            expect(this.transactionType).toBeUndefined();
        });
    });
})();