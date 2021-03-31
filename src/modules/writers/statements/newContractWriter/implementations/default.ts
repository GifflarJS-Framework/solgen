import { INewContract } from "@models/newcontract/types/INewContract";
import helpers from "@utils/helpers";
import { INewContractWriter } from "../types/INewContractWriter";

function createNewContractWriter(): INewContractWriter {
  const newContractWriter: INewContractWriter = {
    /**
     *
     * @param {Object} json
     * @example
     * Json
     * {
     *   statement: "newcontract",
     *   variable: "contract",
     *   contractName: "Contract",
     *   args: ["_owner"]
     * }
     */
    write(json: INewContract): string {
      const args = helpers.getCommaExpression(json.args);
      const text = `new ${json.contractName}(${args})`;

      return text;
    },
  };

  return newContractWriter;
}

export default createNewContractWriter;
