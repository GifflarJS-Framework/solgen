import { IMapping } from "../../../statements/mapping/types/IMapping";
import { ILocalVariable } from "../../../statements/variable/types/ILocalVariable";
export interface IStruct {
    identifier: string;
    variables: Array<ILocalVariable>;
    mappings: Array<IMapping>;
}
