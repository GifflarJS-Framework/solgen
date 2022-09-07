import { ICreateNewContractDTO } from "../../newcontract/types/ICreateNewContract";
export interface IExpressionValue {
    customExpression?: string;
    newContract?: ICreateNewContractDTO;
}
