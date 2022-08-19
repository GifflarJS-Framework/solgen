import { IContractJson } from "@models/contract/types/IContractJson";
import { inject, injectable } from "tsyringe";
import { IContractWriter } from "../types/IContractWriter";
import { IContractBodyWriter } from "@writers/contractBodyWriter/types/IContractBodyWriter";

@injectable()
class ContractWriter implements IContractWriter {
  constructor(
    @inject("ContractBodyWriter")
    private contractBodyWriter: IContractBodyWriter
  ) {}

  write(
    contracts: Array<IContractJson>,
    /** To get every contract text individually. */
    callback: (individualContractText: string, index: number) => void
  ): string {
    if (!contracts) {
      return "";
    }

    // Writing the compiler version
    const version = "pragma solidity 0.6.0;\n\n";

    let text = "";

    contracts.map((json, index) => {
      // Begining of contract
      const txt_start = `contract ${json.contract.name}{\n`;

      // Writing contract body
      const txt_body = this.contractBodyWriter.write(json.contract);

      // End of contract
      const txt_close = "}\n\n";

      // Joining all texts
      const contractText = txt_start + txt_body + txt_close;

      // Sending the contract code to callback
      if (callback && typeof callback === "function") {
        callback(version + contractText, index);
      }

      // Updating final text
      text += contractText;

      return text;
    });

    // Adding solidity version at contract begining
    text = version + text;

    return text;
  }
}

export default ContractWriter;
