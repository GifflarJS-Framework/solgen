import { ICreateNewContractDTO } from "./ICreateNewContract";
import { INewContract } from "./INewContract";
export interface INewContractModel {
    execute({ contractName, args }: ICreateNewContractDTO): INewContract;
}
