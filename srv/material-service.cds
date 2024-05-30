using { qpe.cloud as my } from '../db/schema';
using { srv_ext as external } from './external/srv_ext';

@path: 'service/Material'
service MaterialService {
    entity Risk as projection on my.Risks;
    entity Product as projection on external.A_Product {
        key Product as Product
    };
}