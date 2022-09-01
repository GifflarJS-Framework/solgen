import { ICreateFunctionDTO } from "./ICreateFunctionDTO";
import { IFunction } from "./IFunction";
export interface IFunctionModel {
    execute({ name, scope, isConstructor, inputs, outputs, stateVars, stateMutability, }: ICreateFunctionDTO): IFunction;
}
