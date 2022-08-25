import { IUsing } from "@models/definitions/using/types/IUsing";
import { IUsingWriter } from "../types/IUsingWriter";

class UsingWriter implements IUsingWriter {
  write(usings: Array<IUsing>): string {
    let text = ``;

    usings.map((using) => {
      text += `using ${using.identifier} for ${using.type};\n`;
    });
    if (usings.length) {
      text += `\n`;
    }

    return text;
  }
}

export default UsingWriter;
