import { IContents } from "@models/definitions/content/types/IContents";
import { IFunctionJson } from "@models/definitions/function/types/IFunctionJson";
import { ILocalVariable } from "@models/statements/variable/types/ILocalVariable";
import helpers from "@utils/helpers";
import { IContentWriter } from "@writers/definitions/contentWriter/types/IContentWriter";
import { IInputWriter } from "@writers/statements/inputWriter/types/IInputWriter";
import { IOutputWriter } from "@writers/statements/outputWriter/types/IOutputWriter";
import { inject, injectable } from "tsyringe";
import { IFunctionWriter } from "../types/IFunctionWriter";
import { IFunctionWriterOptions } from "../types/IFunctionWriterOptions";

@injectable()
class FunctionWriter implements IFunctionWriter {
  constructor(
    @inject("ContentWriter")
    private contentWriter: IContentWriter,
    @inject("InputWriter")
    private inputWriter: IInputWriter,
    @inject("OutputWriter")
    private outputWriter: IOutputWriter
  ) {}

  _selectFunctionVariables(func: IFunctionJson): Array<ILocalVariable> {
    const localVariables: Array<any> = func.content.filter(
      (item: IContents) => {
        return item.statement === "variable";
      }
    );

    return localVariables;
  }

  write(
    functions: Array<IFunctionJson>,
    options?: IFunctionWriterOptions
  ): string {
    let text = "//FUNCTIONS\n";

    functions.map((f) => {
      let text_returns = "";
      const scope = ` ${f.scope}`;
      // Verifying whether is a constructor or not
      // Opening the inputs clousure
      if (f.isConstructor) {
        text += "constructor(";
      } else {
        text += `function ${f.name}(`;
      }

      // Writing the inputs
      text += this.inputWriter.write(f.inputs);

      // Requiring outputs
      text_returns += this.outputWriter.write(f.outputs);

      // Organizing state mutability
      let stateMutability = "";
      if (f.stateMutability) {
        stateMutability = ` ${f.stateMutability}`;
      }

      // Override text
      let txt_override = "";
      if (f.overrides) txt_override = ` override`;

      // Virtual text
      let txt_virtual = "";
      if (f.virtual) txt_virtual = ` virtual`;

      // Closing inputs and setting scope
      text += `)${scope}${stateMutability}${txt_override}${txt_virtual}`;

      if (!options || !options.onlyPrototype) {
        // Organizing all modifiers
        let txt_modifiers = "";
        if (f.modifiers) {
          f.modifiers.map((modifier) => {
            txt_modifiers += ` ${modifier.name}`;
            if (modifier.args.length) {
              // Modifier args
              txt_modifiers += `(${helpers.getCommaExpression(modifier.args)})`;
            }
            return modifier;
          });
        }

        // Setting modifiers to main text
        text += `${txt_modifiers}`;
      }

      // Setting the returns text
      if (text_returns) {
        text += ` ${text_returns}`;
      }

      if (options && options.onlyPrototype) {
        text += `;\n`;
      } else {
        // Opening the content clousure
        text += "{\n";

        // Writing function content
        text += this.contentWriter.write(f.content);

        // Closing the function
        text += "}\n\n";
      }

      return text;
    });

    return text;
  }
}

export default FunctionWriter;
