import { IMappingKeyType } from "../../../../types/IMappingKeyType";
import { IMappingTypeName } from "../../../../types/IMappingTypeName";
import { IVisibility } from "../../../../types/IVisibility";
export interface ICreateStateMappingDTO {
    type: IMappingKeyType;
    typeName: IMappingTypeName;
    name: string;
    scope?: IVisibility;
}
