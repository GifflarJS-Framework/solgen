import { IMapping } from "@models/mapping/types/IMapping";
import { ILocalVariable } from "@models/variable/types/ILocalVariable";

export interface ICreateStructDTO {
  identifier: string;
  variables: Array<ILocalVariable>;
  mappings: Array<IMapping>;
}
