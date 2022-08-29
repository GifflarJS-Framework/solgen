import { IReturn } from "@models/statements/return/types/IReturn";
import helpers from "@utils/helpers";
import { IReturnWriter } from "../types/IReturnWriter";

class ReturnWriter implements IReturnWriter {
  write(_return: IReturn): string {
    let text = `return `;
    const txt_expression = helpers.getCommaExpression(_return.expressions);
    text += `(${txt_expression})`;
    return text;
  }
}

export default ReturnWriter;
