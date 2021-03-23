import { ICreateNewContract } from "../types/ICreateNewContract";
import { INewContract } from "../types/INewContract";

function createNewContractModel({
  contractName,
  args = [],
}: ICreateNewContract): INewContract {
  const json = {
    statement: "newcontract",
    contractName,
    args,
  };

  return json;
}

export default createNewContractModel;
