import { IMapping } from "@models/statements/mapping/types/IMapping";
import { ILocalVariable } from "@models/statements/variable/types/ILocalVariable";

export interface IStruct {
  identifier: string;
  variables: Array<ILocalVariable>;
  mappings: Array<IMapping>;
}
