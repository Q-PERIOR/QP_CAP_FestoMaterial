namespace qpe.cloud;
using { managed }from '@sap/cds/common';

entity Risks : managed {
    key ID      : UUID  @(Core.Computed : true);
    title       : String(100);
    prio        : String(5);
    descr       : String;
    impact      : Integer;
    criticality : Integer;
  }