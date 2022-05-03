import { ICreateNewContract } from "../types/ICreateNewContract";
import { INewContract } from "../types/INewContract";
import { INewContractModel } from "../types/INewContractModel";

class NewContractModel implements INewContractModel {
  execute({ contractName, args = [] }: ICreateNewContract): INewContract {
    const json: INewContract = {
      statement: "newcontract",
      contractName,
      args,
    };

    return json;
  }
}

export default NewContractModel;
