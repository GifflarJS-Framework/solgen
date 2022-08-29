import { IMappingKeyType } from "modules/types/IMappingKeyType";
import { IMappingTypeName } from "modules/types/IMappingTypeName";
export interface INestedMapping {
    statement: "nested_mapping";
    type: IMappingKeyType;
    typeName: IMappingTypeName;
}
