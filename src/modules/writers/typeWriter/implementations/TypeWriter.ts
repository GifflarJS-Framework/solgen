import { IType } from "@models/type/types/IType";
import { ITypeWriter } from "../types/ITypeWriter";

class TypeWriter implements ITypeWriter {
  write(types: Array<IType>): string {
    let text = ``;
    types.map((type) => {
      const typeText = `type ${type.identifier} is ${type.type};`;
      text += `${typeText}\n`;
    });
    return text;
  }
}

export default TypeWriter;
