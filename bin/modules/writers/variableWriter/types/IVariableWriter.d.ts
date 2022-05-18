import { IVariable } from "../../../models/variable/types/IVariable";
export interface IVariableWriter {
    write(variables: Array<IVariable> | IVariable): string;
}
