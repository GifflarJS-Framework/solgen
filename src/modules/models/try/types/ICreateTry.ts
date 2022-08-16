import { IInput } from "@models/function/types/IInput";
import { IMethodCall } from "@models/methodcall/types/IMethodCall";
import { INewContract } from "@models/newcontract/types/INewContract";

export interface ICreateTry {
  expression: INewContract | IMethodCall;
  parameters: Array<IInput>;
}
