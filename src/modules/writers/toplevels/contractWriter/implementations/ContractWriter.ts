import { IContractJson } from "@models/toplevels/contract/types/IContractJson";
import { inject, injectable } from "tsyringe";
import { IContractWriter } from "../types/IContractWriter";
import { IContractBodyWriter } from "@writers/toplevels/contractBodyWriter/types/IContractBodyWriter";
import { IInheritsWriter } from "@writers/toplevels/inheritsWriter/types/IInheritsWriter";

@injectable()
class ContractWriter implements IContractWriter {
  constructor(
    @inject("ContractBodyWriter")
    private contractBodyWriter: IContractBodyWriter,
    @inject("InheritsWriter")
    private inheritsWriter: IInheritsWriter
  ) {}

  write(
    contracts: Array<IContractJson>,
    /** To get every contract text individually. */
    callback?: (individualContractText: string, index: number) => void
  ): string {
    if (!contracts) {
      return "";
    }

    let text = "";

    contracts.map((json, index) => {
      // Writing the compiler version
      const txt_version = "pragma solidity 0.6.0;\n\n";

      // Begining of contract
      const txt_start = `contract ${json.contract.name}`;

      // Writing inheritance
      let txt_inherts = this.inheritsWriter.write(json.contract.inherits || []);
      if (txt_inherts) txt_inherts = ` ${txt_inherts}`;
      const txt_openBraces = `{\n`;

      // Writing contract body
      const txt_body = this.contractBodyWriter.write(json.contract);

      // End of contract
      const txt_close = "}\n\n";

      // Joining all texts
      const contractText =
        txt_version +
        txt_start +
        txt_inherts +
        txt_openBraces +
        txt_body +
        txt_close;

      // Sending the contract code to callback
      if (callback && typeof callback === "function") {
        callback(contractText, index);
      }

      // Updating final text
      text += contractText;

      return text;
    });

    return text;
  }
}

export default ContractWriter;
