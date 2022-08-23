import { IContent } from "@models/content/types/IContent";
import { IFunctionJson } from "./IFunctionJson";

export interface IFunction extends IFunctionJson, IContent {
  json: () => IFunctionJson;
  toString: () => string;
  setInput: (type: string, variable: string) => IFunction;
  setOutput: (type: string, variable?: string) => IFunction;
}
