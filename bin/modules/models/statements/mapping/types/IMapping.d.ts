import { IMappingKeyType } from "modules/types/IMappingKeyType";
import { IMappingTypeName } from "modules/types/IMappingTypeName";
export interface IMapping {
    statement: "mapping";
    type: IMappingKeyType;
    typeName: IMappingTypeName;
    name: string;
}
