import { IContent } from "../../content/types/IContent";
import { ITypeName } from "../../../../types/ITypeName";
import { IFunctionJson } from "./IFunctionJson";
export interface IFunction extends IFunctionJson, IContent {
    json: () => IFunctionJson;
    toString: () => string;
    setInput: (type: ITypeName, variable: string) => IFunction;
    setOutput: (type: ITypeName, variable?: string) => IFunction;
}
