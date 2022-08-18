import { ILocalVariable } from "@models/variable/types/ILocalVariable";

export interface IVariableWriter {
  write(variables: ILocalVariable): string;
}
