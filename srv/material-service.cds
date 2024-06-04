using { qpe.cloud as my } from '../db/schema';
using { srv_ext as external } from './external/srv_ext';
using { UI_SOURCINGPROJECT_MANAGE as S4Sourcing } from './external/UI_SOURCINGPROJECT_MANAGE';

@path: 'service/Material'
service MaterialService {
    entity Risk as projection on my.Risks;
    entity Product as projection on external.A_Product {
        key Product as Product
    };
    entity Material as projection on S4Sourcing.CntrlSrcgProjMaterialVH {
        key Material,
        MaterialName,
        MaterialType,
        MaterialTypeName
    };
    entity SourcingProject as projection on S4Sourcing.SourcingProject {
        key SourceSourcingProjectUUID,
        key IsActiveEntity,
        SourcingProject,
        SourcingProjectType
    }
}