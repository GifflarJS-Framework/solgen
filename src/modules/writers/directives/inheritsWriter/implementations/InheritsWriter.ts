import { IInherits } from "@models/directives/inherits/types/IInherits";
import helpers from "@utils/helpers";
import { IInheritsWriter } from "../types/IInheritsWriter";

class InheritsWriter implements IInheritsWriter {
  write(inheritances: Array<IInherits>): string {
    let texts: string[] = [];

    inheritances.map((inherits) => {
      // Writing identifier
      const txt_identifier = `${inherits.identifier}`;
      // Writing args if any
      const txt_args = helpers.getCommaExpression(inherits.args || []);
      // Final individual inherits text
      const txt_inherits = txt_args
        ? `${txt_identifier}(${txt_args})`
        : `${txt_identifier}`;
      // Including to write the final text
      texts.push(txt_inherits);
    });

    // Writing final text
    const text = helpers.getCommaExpression(texts);
    if (!text) return "";

    return `is ${text}`;
  }
}

export default InheritsWriter;
