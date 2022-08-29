import { ICustomError } from "@models/definitions/customError/types/ICustomError";
import { IInputWriter } from "@writers/statements/inputWriter/types/IInputWriter";
import { inject, injectable } from "tsyringe";
import { ICustomErrorWriter } from "../types/ICustomErrorWriter";

@injectable()
class CustomErrorWriter implements ICustomErrorWriter {
  constructor(
    @inject("InputWriter")
    private inputWriter: IInputWriter
  ) {}

  write(customErrors: Array<ICustomError>): string {
    let text = ``;
    customErrors.map((customError) => {
      let customErrorText = `error ${customError.name}(`;
      customErrorText = customErrorText.concat(
        `${this.inputWriter.write(customError.args, true)});\n`
      );
      text = text.concat(customErrorText);
    });
    if (customErrors.length) {
      text = text.concat(`\n`);
    }
    return text;
  }
}

export default CustomErrorWriter;
