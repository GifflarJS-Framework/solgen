import { IContractJson } from "@models/contract/types/IContractJson";
import { IEvent } from "@models/eventCall/types/IEvent";
import { IEventWriter } from "@writers/eventWriter/types/IEventWriter";
import { IFunctionWriter } from "@writers/functionWriter/types/IFunctionWriter";
import { IGlobalVariableWriter } from "@writers/globalVariableWriter/types/IGlobalVariableWriter";
import { IVariableWriter } from "@writers/variableWriter/types/IVariableWriter";
import { inject, injectable } from "tsyringe";
import { IContractWriter } from "../types/IContractWriter";

@injectable()
class ContractWriter implements IContractWriter {
  constructor(
    @inject("EventWriter")
    private eventWriter: IEventWriter,
    @inject("FunctionWriter")
    private functionWriter: IFunctionWriter,
    @inject("GlobalVariableWriter")
    private globalVariableWriter: IGlobalVariableWriter
  ) {}

  /**
   * Write the initial clousures of the contract Solidity code.
   * @private
   */
  private _start(contract_name: string) {
    // Initing the contract
    const text = `contract ${contract_name}{\n`;

    return text;
  }

  /**
   * Write the final clousures of the contract Solidity code.
   * @private
   */
  private _close(): string {
    // Closing contract definition
    const text = "}";

    return text;
  }

  write(
    contracts: Array<IContractJson>,
    callback: (versionPlusContractText: string, index: number) => void
  ): string {
    if (!contracts) {
      return "";
    }

    // Writing the compiler version
    const version = "pragma solidity 0.5.17;\n\n";

    let text = "";
    let contractText;

    contracts.map((json, index) => {
      contractText = "";
      const txt_start = this._start(json.name);
      let { functions } = json.contract;

      const txt_variables = this.globalVariableWriter.write(
        json.contract.variables,
        (request) => {
          functions = functions.concat(request.functions);
        }
      );

      let events: Array<IEvent> = [];
      const txt_functions = this.functionWriter.write(
        functions,
        json.contract.variables
      );
      const txt_events = this.eventWriter.write(events);
      const txt_close = this._close();

      contractText += `${
        txt_start + txt_variables + txt_events + txt_functions + txt_close
      }\n\n`;

      text += contractText;

      if (callback && typeof callback === "function") {
        callback(version + contractText, index);
      }

      return text;
    });

    text = version + text;

    return text;
  }
}

export default ContractWriter;
