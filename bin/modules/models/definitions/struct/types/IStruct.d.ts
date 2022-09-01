import { ICreateMappingDTO } from "../../../statements/mapping/types/ICreateMappingDTO";
import { ICreateVariableDTO } from "../../../statements/variable/types/ICreateVariableDTO";
export interface IStruct {
    identifier: string;
    variables: Array<ICreateVariableDTO>;
    mappings: Array<ICreateMappingDTO>;
}
