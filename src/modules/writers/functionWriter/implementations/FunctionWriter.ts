import { IContents } from "@models/content/types/IContents";
import { IFunctionJson } from "@models/function/types/IFunctionJson";
import { IGlobalVariable } from "@models/globalVariable/types/IGlobalVariable";
import { ILocalVariable } from "@models/variable/types/ILocalVariable";
import { IVariable } from "@models/variable/types/IVariable";
import { IContentWriter } from "@writers/contentWriter/types/IContentWriter";
import { IInputWriter } from "@writers/statements/inputWriter/types/IInputWriter";
import { IOutputWriter } from "@writers/statements/outputWriter/types/IOutputWriter";
import { inject, injectable } from "tsyringe";
import { IFunctionWriter } from "../types/IFunctionWriter";

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
    variables: Array<IGlobalVariable>
  ): string {
    let text = "//FUNCTIONS\n";

    functions.map((f) => {
      const localVariables = this._selectFunctionVariables(f);
      const concatenedVariables: Array<IVariable> = Array.prototype.concat(
        variables,
        localVariables
      );
      // const outputWriter = this.outputWriter.write(concatenedVariables);
      let text_return = "";
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
      text_return += this.outputWriter.write(
        f.outputs,
        concatenedVariables,
        ({ text_returns: _text_returns }) => {
          text_returns = _text_returns;
        }
      );

      // Organizing state mutability
      let stateMutability = "";
      if (f.stateMutability) {
        stateMutability = ` ${f.stateMutability}`;
      }

      // Organizing all modifiers
      let modifiers = "";
      if (f.modifiers) {
        f.modifiers.map((modifier) => {
          modifiers += ` ${modifier}`;
          return modifier;
        });
      }

      // Closing inputs and setting scope
      text += `)${scope}${stateMutability}${modifiers}`;

      // Setting the returns text
      if (text_returns) {
        text += ` ${text_returns} `;
      }

      // Opening the content clousure
      text += "{\n";

      // Writing function content
      text += this.contentWriter.write(f.content);

      // Setting the return values
      text += text_return;

      // Closing the function
      text += "}\n\n";

      return text;
    });

    return text;
  }
}

export default FunctionWriter;
