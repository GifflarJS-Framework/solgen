import { INewContract } from "@models/newcontract/types/INewContract";
import helpers from "@utils/helpers";
import { INewContractWriter } from "../types/INewContractWriter";

class NewContractWriter implements INewContractWriter {
  write(json: INewContract): string {
    const args = helpers.getCommaExpression(json.args);
    const text = `new ${json.contractName}(${args})`;

    return text;
  }
}

export default NewContractWriter;
