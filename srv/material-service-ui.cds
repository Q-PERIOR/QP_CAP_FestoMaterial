using MaterialService from './material-service';

annotate MaterialService.Product with @(
    UI: {
        LineItem: [
			{Value: Product}
        ],
        SelectionFields  : [
            Product
        ],
    }
);

annotate MaterialService.Material with @(
    UI: {
        LineItem  : [
            { Value: Material },
            { Value: MaterialName },
            { Value: MaterialBaseUnit },
            { Value: MaterialGroup },
            { Value: MaterialGroupName },
            { Value: MaterialType },
            { Value: MaterialTypeName },
            { Value: OpnCtlgWebServiceID },
            { Value: Plant }
        ],
        SelectionFields  : [
            Material,
            MaterialName,
            Plant,
            ProcurementHubSourceSystem
        ],
    }
);

annotate MaterialService.Material with {
    @Common.FilterDefaultValue : 'LOCAL'
    ProcurementHubSourceSystem
}



