import { IMappingKeyType } from "modules/types/IMappingKeyType";
import { IMappingTypeName } from "modules/types/IMappingTypeName";
import { IVisibility } from "modules/types/IVisibility";
export interface IStateMapping {
    type: IMappingKeyType;
    typeName: IMappingTypeName;
    name: string;
    scope?: IVisibility;
}
