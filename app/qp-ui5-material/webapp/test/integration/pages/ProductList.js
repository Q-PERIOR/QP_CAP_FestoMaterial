sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'qp.qpui5material',
            componentId: 'ProductList',
            entitySet: 'Product'
        },
        CustomPageDefinitions
    );
});