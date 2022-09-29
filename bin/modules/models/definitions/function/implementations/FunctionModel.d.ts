import { IContentModel } from "../../content/types/IContentModel";
import { ICreateFunctionDTO } from "../types/ICreateFunctionDTO";
import { IFunction } from "../types/IFunction";
import { IFunctionModel } from "../types/IFunctionModel";
declare class FunctionModel implements IFunctionModel {
    private contentModel;
    constructor(contentModel: IContentModel);
    execute({ name, scope, isConstructor, stateMutability, inputs, outputs, stateVars, modifiers, overrides, virtual, }: ICreateFunctionDTO): IFunction;
}
export default FunctionModel;
