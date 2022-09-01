import { ICreateMethodCallDTO } from "../../methodcall/types/ICreateMethodCallDTO";
import { ICreateNewContractDTO } from "../../newcontract/types/ICreateNewContract";
export interface ITryExpression {
    newContract?: ICreateNewContractDTO;
    methodCall?: ICreateMethodCallDTO;
}
