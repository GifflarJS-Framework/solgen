import { ICreateNewContractDTO } from "../types/ICreateNewContract";
import { INewContract } from "../types/INewContract";
import { INewContractModel } from "../types/INewContractModel";
declare class NewContractModel implements INewContractModel {
    execute({ contractName, args }: ICreateNewContractDTO): INewContract;
}
export default NewContractModel;
