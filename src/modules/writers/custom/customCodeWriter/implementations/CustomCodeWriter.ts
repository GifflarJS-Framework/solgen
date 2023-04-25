import { ICustomCode } from "@modules/models/custom/customCode/types/ICustomCode";
import { ICustomCodeWriter } from "../types/ICustomCodeWriter";

class CustomCodeWriter implements ICustomCodeWriter {
  write(customCodes: ICustomCode[]): string {
    let text = "";

    customCodes.map((customCode) => {
      text += `${customCode.code}\n`;
    });

    return text;
  }
}

export default CustomCodeWriter;
