import { IContractJson } from "@models/contract/types/IContractJson";
import { IEventWriter } from "@writers/eventWriter/types/IEventWriter";
import { IFunctionWriter } from "@writers/functionWriter/types/IFunctionWriter";
import { IGlobalVariableWriter } from "@writers/globalVariableWriter/types/IGlobalVariableWriter";
import { ICustomErrorWriter } from "@writers/customErrorWriter/types/ICustomErrorWriter";
import { IGlobalMappingWriter } from "@writers/globalMappingWriter/types/IGlobalMappingWriter";
import { IModifierWriter } from "@writers/modifierWriter/types/IModifierWriter";
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
    private globalVariableWriter: IGlobalVariableWriter,
    @inject("ModifierWriter")
    private modifierWriter: IModifierWriter,
    @inject("CustomErrorWriter")
    private customErrorWriter: ICustomErrorWriter,
    @inject("GlobalMappingWriter")
    private globalMappingWriter: IGlobalMappingWriter
  ) {}

  private _start(contract_name: string) {
    // Initing the contract
    const text = `contract ${contract_name}{\n`;

    return text;
  }

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
    const version = "pragma solidity 0.6.0;\n\n";

    let text = "";
    let contractText;

    contracts.map((json, index) => {
      contractText = "";
      const txt_start = this._start(json.name);
      let { functions } = json.contract;

      // Variables
      const txt_variables = this.globalVariableWriter.write(
        json.contract.variables,
        (request) => {
          functions = functions.concat(request.functions);
        }
      );

      // Mappings
      const txt_mappings = this.globalMappingWriter.write(
        json.contract.mappings
      );

      // Events
      const txt_events = this.eventWriter.write(json.contract.events);

      // Modifiers
      const txt_modifiers = this.modifierWriter.write(json.contract.modifiers);

      // Custom Errors
      const txt_custom_errors = this.customErrorWriter.write(
        json.contract.customErrors
      );

      // Functions
      const txt_functions = this.functionWriter.write(
        functions,
        json.contract.variables
      );
      const txt_close = this._close();

      contractText += `${
        txt_start +
        txt_variables +
        txt_mappings +
        txt_events +
        txt_modifiers +
        txt_custom_errors +
        txt_functions +
        txt_close
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
