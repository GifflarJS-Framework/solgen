import { ICreateNestedMapping } from "../models/statements/mapping/types/ICreateNestedMapping";
import { ITypeName } from "./ITypeName";
export interface IMappingTypeName extends ITypeName {
    nestedMapping?: ICreateNestedMapping;
}
