import { IContractBodyItem } from "@models/contractBody/types/IContractBodyItem";
import { ICustomErrorWriter } from "@writers/customErrorWriter/types/ICustomErrorWriter";
import { IEventWriter } from "@writers/eventWriter/types/IEventWriter";
import { IFunctionWriter } from "@writers/functionWriter/types/IFunctionWriter";
import { IModifierWriter } from "@writers/modifierWriter/types/IModifierWriter";
import { IStateMappingWriter } from "@writers/stateMappingWriter/types/IStateMappingWriter";
import { IStateVariableWriter } from "@writers/stateVariableWriter/types/IStateVariableWriter";
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
    @inject("CustomErrorWriter")
    private customErrorWriter: ICustomErrorWriter,
    @inject("StateMappingWriter")
    private stateMappingWriter: IStateMappingWriter
  ) {}

  write(bodyItem: IContractBodyItem): string {
    // Variables
    const txt_variables = this.stateVariableWriter.write(bodyItem.variables);

    // Mappings
    const txt_mappings = this.stateMappingWriter.write(bodyItem.mappings);

    // Events
    const txt_events = this.eventWriter.write(bodyItem.events);

    // Modifiers
    const txt_modifiers = this.modifierWriter.write(bodyItem.modifiers);

    // Custom Errors
    const txt_custom_errors = this.customErrorWriter.write(
      bodyItem.customErrors
    );

    // Functions
    const txt_functions = this.functionWriter.write(
      bodyItem.functions,
      bodyItem.variables
    );

    const bodyText = `${
      txt_variables +
      txt_mappings +
      txt_events +
      txt_modifiers +
      txt_custom_errors +
      txt_functions
    }`;

    return bodyText;
  }
}

export default ContractBodyWriter;
