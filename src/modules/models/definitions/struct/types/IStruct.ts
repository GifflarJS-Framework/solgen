import { ICreateMappingDTO } from "@models/statements/mapping/types/ICreateMappingDTO";
import { ICreateVariableDTO } from "@models/statements/variable/types/ICreateVariableDTO";

export interface IStruct {
  identifier: string;
  variables: Array<ICreateVariableDTO>;
  mappings: Array<ICreateMappingDTO>;
}
