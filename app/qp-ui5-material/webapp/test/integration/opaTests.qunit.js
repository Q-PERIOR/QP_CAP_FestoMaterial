sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'qp/qpui5material/test/integration/FirstJourney',
		'qp/qpui5material/test/integration/pages/ProductList',
		'qp/qpui5material/test/integration/pages/ProductObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductList, ProductObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('qp/qpui5material') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductList: ProductList,
					onTheProductObjectPage: ProductObjectPage
                }
            },
            opaJourney.run
        );
    }
);