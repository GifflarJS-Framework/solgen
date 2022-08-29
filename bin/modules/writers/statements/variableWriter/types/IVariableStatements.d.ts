import { INewContract } from "../../../../models/statements/newcontract/types/INewContract";
export interface IVariableStatements {
    newcontract: (json: INewContract) => string;
}
