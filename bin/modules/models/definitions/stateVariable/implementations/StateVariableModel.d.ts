import { ICreateStateVariableDTO } from "../types/ICreateStateVariableDTO";
import { IStateVariable } from "../types/IStateVariable";
import { IStateVariableModel } from "../types/IStateVariableModel";
declare class StateVariableModel implements IStateVariableModel {
    execute({ type, name, scope, stateMutability, value, }: ICreateStateVariableDTO): IStateVariable;
}
export default StateVariableModel;
