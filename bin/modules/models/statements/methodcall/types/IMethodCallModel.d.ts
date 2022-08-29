import { ICreateMethodCallDTO } from "./ICreateMethodCallDTO";
import { IMethodCall } from "./IMethodCall";
export interface IMethodCallModel {
    execute({ variable, method, value }: ICreateMethodCallDTO): IMethodCall;
}
