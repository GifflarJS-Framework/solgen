import { ICreateFunctionDTO } from "../dtos/ICreateFunctionDTO";
import { IFunction } from "./IFunction";
export interface IFunctionModel {
    execute({ name, scope, isConstructor, inputs, outputs, globalVars, }: ICreateFunctionDTO): IFunction;
}
