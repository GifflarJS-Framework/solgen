import { ILocalVariable } from "../../../../models/statements/variable/types/ILocalVariable";
export interface IVariableWriter {
    write(variables: ILocalVariable): string;
}
