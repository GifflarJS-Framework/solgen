import { IMethodCall } from "../types/IMethodCall";
import { ICreateMethodCallDTO } from "../types/ICreateMethodCallDTO";
import { IMethodCallModel } from "../types/IMethodCallModel";
declare class MethodCallModel implements IMethodCallModel {
    execute({ variable, method, args }: ICreateMethodCallDTO): IMethodCall;
}
export default MethodCallModel;
