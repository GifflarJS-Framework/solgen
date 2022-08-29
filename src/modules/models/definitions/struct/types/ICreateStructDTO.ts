import { ICreateMappingDTO } from "@models/statements/mapping/types/ICreateMappingDTO";
import { IMapping } from "@models/statements/mapping/types/IMapping";
import { ICreateVariableDTO } from "@models/statements/variable/types/ICreateVariableDTO";

export interface ICreateStructDTO {
  identifier: string;
  variables: Array<ICreateVariableDTO>;
  mappings: Array<ICreateMappingDTO>;
}
