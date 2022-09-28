import { ILocalVariable } from "@models/statements/variable/types/ILocalVariable";

export interface ICreateForDTO {
  variable?: ILocalVariable;
  condition?: string;
  expression?: string;
}
