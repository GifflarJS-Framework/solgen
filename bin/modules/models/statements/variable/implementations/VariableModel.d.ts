import { ICreateVariableDTO } from "../types/ICreateVariableDTO";
import { ILocalVariable } from "../types/ILocalVariable";
import { IVariableModel } from "../types/IVariableModel";
declare class VariableModel implements IVariableModel {
    execute({ type, dataLocation, name, value, }: ICreateVariableDTO): ILocalVariable;
}
export default VariableModel;
