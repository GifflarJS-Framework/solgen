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

  write(json: IModifier): string {
    let str = `modifier ${json.title}`;

    // Defining args if any
    if (json.args.length > 0) {
      const argsStr = this.inputWriter.write(json.args);
      // Defining the modifier content
      str = str.concat(`(${argsStr})`);
    }

    // If virtual
    if (json.isVirtual) {
      str = str.concat(` virtual`);
    }

    // If overriding
    if (json.isOverriding) {
      str = str.concat(` override`);
    }

    // Defining the modifier content
    const contentStr = this.contentWriter.write(json.content);
    str = str.concat(`{\n`);
    str = str.concat(`${contentStr}`);
    str = str.concat(`_;\n}`);

    return str;
  }
}

export default ModifierWriter;
