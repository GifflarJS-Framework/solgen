import { IModifier } from "@models/modifier/types/IModifier";
import { IContentWriter } from "@writers/contentWriter/types/IContentWriter";
import { IInputWriter } from "@writers/statements/inputWriter/types/IInputWriter";
import { inject, injectable } from "tsyringe";
import { IModifierWriter } from "../types/IModifierWriter";

@injectable()
class ModifierWriter implements IModifierWriter {
  constructor(
    @inject("ContentWriter")
    private contentWriter: IContentWriter,
    @inject("InputWriter")
    private inputWriter: IInputWriter
  ) {}

  write(modifiers: Array<IModifier>): string {
    let text = ``;

    modifiers.map((modifier) => {
      let str = `modifier ${modifier.title}`;

      // Defining args if any
      if (modifier.args.length > 0) {
        const argsStr = this.inputWriter.write(modifier.args);
        // Defining the modifier content
        str = str.concat(`(${argsStr})`);
      }

      // If virtual
      if (modifier.isVirtual) {
        str = str.concat(` virtual`);
      }

      // If overriding
      if (modifier.isOverriding) {
        str = str.concat(` override`);
      }

      // Defining the modifier content
      const contentStr = this.contentWriter.write(modifier.content);
      str = str.concat(`{\n`);
      str = str.concat(`${contentStr}`);
      str = str.concat(`_;\n}`);

      // Updating complete text
      text = text.concat(`${str}\n\n`);
    });

    return text;
  }
}

export default ModifierWriter;
