sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller, MessageToast) {
    'use strict';

    return {

        onCreateSourcingProject: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
            let aSelectedContext = this.getSelectedContexts();
            let aItems = [];

            debugger;

            for ( let i = 0; i<aSelectedContext.length; i++ ){
                let oItem = {
                    SourcingProjectItemType: "N",
                    SrcgProjItemClassification: "C",
                    Material: aSelectedContext[i].getProperty("Product")
                }
                aItems.push(oItem)
            }

            let oEntry = {
                SourcingProjectType: "ST",
                to_SourcingProjectItem: aItems
            };

            let oModel = aSelectedContext[0].getModel();
            let context = oModel.createBindingContext("/SourcingProject");

            let oSalesOrderBinding = oModel.bindList("/SourcingProject");
            this.oNewSalesOrderContext = oSalesOrderBinding.create(oEntry);
            this.oNewSalesOrderContext.created().then(function () {
                // successfully created
            }, function () {
                // creation canceled (if the request failed, it will be
                // automatically queued again)
            });
            debugger;

            debugger;
        }
    };
});
