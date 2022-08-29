import { IMappingKeyType } from "modules/types/IMappingKeyType";
import { IMappingTypeName } from "modules/types/IMappingTypeName";
export interface ICreateMappingDTO {
    type: IMappingKeyType;
    typeName: IMappingTypeName;
    name: string;
}
