import { IInterfaceJson } from "@models/toplevels/interface/types/IInterfaceJson";
import { IEventWriter } from "@writers/definitions/eventWriter/types/IEventWriter";
import { IFunctionWriter } from "@writers/definitions/functionWriter/types/IFunctionWriter";
import { IInheritsWriter } from "@writers/toplevels/inheritsWriter/types/IInheritsWriter";
import { IModifierWriter } from "@writers/definitions/modifierWriter/types/IModifierWriter";
import { inject, injectable } from "tsyringe";
import { IInterfaceWriter } from "../types/IInterfaceWriter";

@injectable()
class InterfaceWriter implements IInterfaceWriter {
  constructor(
    @inject("EventWriter")
    private eventWriter: IEventWriter,
    @inject("ModifierWriter")
    private modifierWriter: IModifierWriter,
    @inject("FunctionWriter")
    private functionWriter: IFunctionWriter,
    @inject("InheritsWriter")
    private inheritsWriter: IInheritsWriter
  ) {}

  write(
    interfaces: Array<IInterfaceJson>,
    /** To get every interface text individually. */
    callback?: (individualInterfaceText: string, index: number) => void
  ): string {
    if (!interfaces) {
      return "";
    }

    let text = "";

    interfaces.map((json, index) => {
      // Writing the compiler version
      const txt_version = "pragma solidity 0.6.0;\n\n";

      // Begining of interface
      const txt_start = `interface ${json.interface.name}`;

      // Writing inheritance
      let txt_inherts = this.inheritsWriter.write(
        json.interface.inherits || []
      );
      if (txt_inherts) txt_inherts = ` ${txt_inherts}`;
      const txt_openBraces = ` {\n`;

      // Writing interface body
      const txt_events = this.eventWriter.write(json.interface.events || []);
      const txt_modifiers = this.modifierWriter.write(
        json.interface.modifiers || []
      );

      //*Custom errors are only available starting from v0.8.4 solidity version
      // const txt_custom_errors = this.customErrorWriter.write(
      //   json.interface.customErrors || []
      // );
      const txt_functions = this.functionWriter.write(
        json.interface.functions || [],
        { onlyPrototype: true }
      );

      // End of interface
      const txt_close = "}\n\n";

      // Joining all texts
      const interfaceText =
        txt_version +
        txt_start +
        txt_inherts +
        txt_openBraces +
        txt_events +
        txt_modifiers +
        txt_functions +
        txt_close;

      // Sending the contract code to callback
      if (callback && typeof callback === "function") {
        callback(interfaceText, index);
      }

      // Updating final text
      text += interfaceText;

      return text;
    });

    return text;
  }
}

export default InterfaceWriter;
