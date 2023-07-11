namespace db;

using {
    cuid,
    managed
} from '@sap/cds/common';

entity Items : managed {
    key ID    : Integer;
        Value : Integer;
}
