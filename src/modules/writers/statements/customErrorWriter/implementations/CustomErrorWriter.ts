import { ICustomError } from "@models/customError/types/ICustomError";
import { IInputWriter } from "@writers/statements/inputWriter/types/IInputWriter";
import { inject, injectable } from "tsyringe";
import { ICustomErrorWriter } from "../types/ICustomErrorWriter";

@injectable()
class CustomErrorWriter implements ICustomErrorWriter {
  constructor(
    @inject("InputWriter")
    private inputWriter: IInputWriter
  ) {}

  write(customError: ICustomError): string {
    let text = `error ${customError.name}(`;
    text = text.concat(`${this.inputWriter.write(customError.args, true)});`);
    return text;
  }
}

export default CustomErrorWriter;
