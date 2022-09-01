import { IMappingKeyType } from "../../../../types/IMappingKeyType";
import { IMappingTypeName } from "../../../../types/IMappingTypeName";
export interface IMapping {
    statement: "mapping";
    type: IMappingKeyType;
    typeName: IMappingTypeName;
    name: string;
}
