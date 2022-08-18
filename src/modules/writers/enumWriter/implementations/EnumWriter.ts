import { IEnum } from "@models/enum/types/IEnum";
import helpers from "@utils/helpers";
import { IEnumWriter } from "../types/IEnumWriter";

class EnumWriter implements IEnumWriter {
  write(_enums: Array<IEnum>): string {
    let text = ``;
    _enums.map((_enum) => {
      const enumIdentifiersOptionsText = helpers.getCommaExpression(
        _enum.identifiersOptions
      );
      const enumText = `enum ${_enum.identifier}{${enumIdentifiersOptionsText}}\n`;
      text += enumText;
    });

    return text;
  }
}

export default EnumWriter;
