import { IMappingKeyType } from "modules/types/IMappingKeyType";
import { IMappingTypeName } from "modules/types/IMappingTypeName";
export interface ICreateNestedMapping {
    type: IMappingKeyType;
    typeName: IMappingTypeName;
}
