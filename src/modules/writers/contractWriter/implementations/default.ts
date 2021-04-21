import { IContractJson } from "@models/contract/types/IContractJson";
import { IEvent } from "@models/eventCall/types/IEvent";
import createEventWriter from "@writers/eventWriter";
import createFunctionWriter from "@writers/functionWriter";
import createGlobalVariableWriter from "@writers/globalVariableWriter/implementations/default";
import createVariableWriter from "@writers/variableWriter";
import { IContractWriter } from "../types/IContractWriter";

/**
 * @name createContractWriter
 * @description A **Factory** that creates the contract writer object to write
 * the contract Solidity code.
 */
function createContractWriter(): IContractWriter {
  /**
   * Write the initial clousures of the contract Solidity code.
   * @private
   */
  function _start(contract_name: string) {
    // Initing the contract
    const text = `contract ${contract_name}{\n`;

    return text;
  }

  /**
   * Write the final clousures of the contract Solidity code.
   * @private
   */
  function _close(): string {
    // Closing contract definition
    const text = "}";

    return text;
  }

  const contractWriter: IContractWriter = {
    /**
     * Writes the contract Solidity code.
     * @param {Object[]} contracts - The list of contracts to be wrote.
     */
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
        const globalVariableWriter = createGlobalVariableWriter();
        const eventWriter = createEventWriter();
        const functionWriter = createFunctionWriter(json.contract.variables);
        const txt_start = _start(json.name);
        let { functions } = json.contract;

        const txt_variables = globalVariableWriter.write(
          json.contract.variables,
          (request) => {
            functions = functions.concat(request.functions);
          }
        );

        let events: Array<IEvent> = [];
        const txt_functions = functionWriter.write(functions, (request) => {
          events = request.events;
        });
        const txt_events = eventWriter.write(events);
        const txt_close = _close();

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
    },
  };

  return contractWriter;
}

export default createContractWriter;
