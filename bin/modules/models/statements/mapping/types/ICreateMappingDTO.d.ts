import { IMappingKeyType } from "../../../../types/IMappingKeyType";
import { IMappingTypeName } from "../../../../types/IMappingTypeName";
export interface ICreateMappingDTO {
    type: IMappingKeyType;
    typeName: IMappingTypeName;
    name: string;
}
