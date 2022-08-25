import { IInput } from "@models/definitions/function/types/IInput";
import { IMethodCall } from "@models/statements/methodcall/types/IMethodCall";
import { INewContract } from "@models/statements/newcontract/types/INewContract";

export interface ICreateTryDTO {
  expression: INewContract | IMethodCall;
  parameters: Array<IInput>;
}
