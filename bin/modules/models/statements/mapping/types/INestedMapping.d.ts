import { IMappingKeyType } from "../../../../types/IMappingKeyType";
import { IMappingTypeName } from "../../../../types/IMappingTypeName";
export interface INestedMapping {
    statement: "nested_mapping";
    type: IMappingKeyType;
    typeName: IMappingTypeName;
}
