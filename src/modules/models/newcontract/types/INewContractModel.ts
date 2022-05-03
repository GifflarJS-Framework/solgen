import { ICreateNewContract } from "./ICreateNewContract";
import { INewContract } from "./INewContract";

export interface INewContractModel {
  execute({ contractName, args }: ICreateNewContract): INewContract;
}
