
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

        var stockinhand_item1, item1;

        beforeEach(function() {
            stockinhand_item1 = 11, item1 = 1;
            console.log(
                "beforeEach: Stock in hand for item1 before spec execution = " + stockinhand_item1
            );
        });

        afterEach(function() {
            stockinhand_item1 = 0, item1 = 0;
            console.log(
                "afterEach: Stock in hand for item1 once spec executed = " + stockinhand_item1
            )
        });

        // Scenario-1
        it('On sale of an item', function() {
            // var transaction = 'SALE';
            expect(stockinhand_item1 - item1).toEqual(10);
        });
        it('On issue of an item within the organization', function() {
            // var transaction = 'ISSUE';
            expect(stockinhand_item1 - item1).toEqual(10);
        });

        // Scenario-2
        it('On return of an item', function() {
            // var transaction = 'SALE RETURN';
            expect(stockinhand_item1 + item1).toEqual(12);
        });

        // Scenario-3
        it('On receiving or procurring new item', function() {
            // var transaction = 'PROCUREMENT';
            expect(stockinhand_item1 + item1).toEqual(12);
        });
    });
})();