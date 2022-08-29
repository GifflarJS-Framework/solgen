import { ICreateMethodCallDTO } from "@models/statements/methodcall/types/ICreateMethodCallDTO";
import { ICreateNewContractDTO } from "@models/statements/newcontract/types/ICreateNewContract";

export interface ITryExpression {
  newContract?: ICreateNewContractDTO;
  methodCall?: ICreateMethodCallDTO;
}
