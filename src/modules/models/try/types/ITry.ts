import { IStackItem } from "@models/content/types/IStackItem";
import { IInput } from "@models/function/types/IInput";
import { IMethodCall } from "@models/methodcall/types/IMethodCall";
import { INewContract } from "@models/newcontract/types/INewContract";

export interface ITry extends IStackItem {
  statement: "try";
  expression: INewContract | IMethodCall;
  parameters: Array<IInput>;
}
