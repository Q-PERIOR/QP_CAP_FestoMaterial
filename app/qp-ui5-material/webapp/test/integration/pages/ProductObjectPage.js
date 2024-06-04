sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'qp.qpui5material',
            componentId: 'ProductObjectPage',
            entitySet: 'Product'
        },
        CustomPageDefinitions
    );
});