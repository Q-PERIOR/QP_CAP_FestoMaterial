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

