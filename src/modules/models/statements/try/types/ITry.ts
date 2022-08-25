import { IStackItem } from "@models/definitions/content/types/IStackItem";
import { IInput } from "@models/definitions/function/types/IInput";
import { IMethodCall } from "@models/statements/methodcall/types/IMethodCall";
import { INewContract } from "@models/statements/newcontract/types/INewContract";

export interface ITry extends IStackItem {
  statement: "try";
  /** Try can only be used with external function calls and contract creation calls */
  expression: INewContract | IMethodCall;
  parameters: Array<IInput>;
}
