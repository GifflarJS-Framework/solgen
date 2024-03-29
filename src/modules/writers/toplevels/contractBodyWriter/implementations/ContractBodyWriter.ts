import { IContractBodyItem } from "@models/toplevels/contractBody/types/IContractBodyItem";
import { ICustomCodeWriter } from "@modules/writers/custom/customCodeWriter/types/ICustomCodeWriter";
import { IEnumWriter } from "@writers/definitions/enumWriter/types/IEnumWriter";
import { IEventWriter } from "@writers/definitions/eventWriter/types/IEventWriter";
import { IFunctionWriter } from "@writers/definitions/functionWriter/types/IFunctionWriter";
import { IModifierWriter } from "@writers/definitions/modifierWriter/types/IModifierWriter";
import { IStateMappingWriter } from "@writers/definitions/stateMappingWriter/types/IStateMappingWriter";
import { IStateVariableWriter } from "@writers/definitions/stateVariableWriter/types/IStateVariableWriter";
import { IUsingWriter } from "@writers/definitions/usingWriter/types/IUsingWriter";
import { inject, injectable } from "tsyringe";
import { IContractBodyWriter } from "../types/IContractBodyWriter";

@injectable()
class ContractBodyWriter implements IContractBodyWriter {
  constructor(
    @inject("EventWriter")
    private eventWriter: IEventWriter,
    @inject("FunctionWriter")
    private functionWriter: IFunctionWriter,
    @inject("StateVariableWriter")
    private stateVariableWriter: IStateVariableWriter,
    @inject("ModifierWriter")
    private modifierWriter: IModifierWriter,
    @inject("StateMappingWriter")
    private stateMappingWriter: IStateMappingWriter,
    @inject("UsingWriter")
    private usingWriter: IUsingWriter,
    @inject("EnumWriter")
    private enumWriter: IEnumWriter,
    @inject("CustomCodeWriter")
    private customCodeWriter: ICustomCodeWriter
  ) {}

  write(bodyItem: IContractBodyItem): string {
    // Usings
    const txt_using = this.usingWriter.write(bodyItem.usings || []);

    // Enums
    const txt_enums = this.enumWriter.write(bodyItem.enums || []);

    // Variables
    const txt_variables = this.stateVariableWriter.write(
      bodyItem.variables || []
    );

    // Mappings
    const txt_mappings = this.stateMappingWriter.write(bodyItem.mappings || []);

    // Events
    const txt_events = this.eventWriter.write(bodyItem.events || []);

    // Modifiers
    const txt_modifiers = this.modifierWriter.write(bodyItem.modifiers || []);

    // Custom Codes
    const txt_custom_codes = this.customCodeWriter.write(
      bodyItem.customCodes || []
    );

    // Custom Errors
    // *Custom errors are only available starting from v0.8.4 solidity version
    // const txt_custom_errors = this.customErrorWriter.write(
    //   bodyItem.customErrors || []
    // );

    // Functions
    const txt_functions = this.functionWriter.write(bodyItem.functions || []);

    const bodyText = `${
      txt_using +
      txt_enums +
      txt_variables +
      txt_mappings +
      txt_events +
      txt_modifiers +
      txt_custom_codes +
      txt_functions
    }`;

    return bodyText;
  }
}

export default ContractBodyWriter;
