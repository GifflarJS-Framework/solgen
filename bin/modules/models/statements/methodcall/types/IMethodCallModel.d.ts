import { ICreateMethodCallDTO } from "./ICreateMethodCallDTO";
import { IMethodCall } from "./IMethodCall";
export interface IMethodCallModel {
    execute({ variable, method, args }: ICreateMethodCallDTO): IMethodCall;
}
