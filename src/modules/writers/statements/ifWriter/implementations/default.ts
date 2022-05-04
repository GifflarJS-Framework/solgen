import { IContents } from "@models/content/types/IContents";
import { IIf } from "@models/if/types/IIf";
import { IRequest } from "@models/request/types/IRequest";
import { IIfWriter } from "../types/IIfWriter";

/**
 * @name createIfWriter
 * @description A **Factory** that creates an ifWriter, that is responsible for
 * knowing how to create an if/else statement by the json given through the write
 * function.
 * @param {Function} writeContent The function for creating a content, because
 * the if sttement also have content.
 * @example
 * Usage
 * const ifWriter = createIfWriter();
 *
 * Return
 * {
 *   write: [Function]
 * }
 */
function createIfWriter(
  writeContent: (
    content: Array<IContents>,
    callback: (request: IRequest) => void
  ) => string
): IIfWriter {
  const ifWriter: IIfWriter = {
    /**
     * @name write
     * @description Writes an if statement in Solidity code.
     * @param {Object} json The if statement in json format.
     * @returns {string} The if statement in Solidity code as string.
     * @example
     * Input
     * {
     *  statement: "if",
     *   else: true,
     *   condition: "_val == 1",
     *    content: [
     *      {
     *        statement: "assignment"
     *        variable: "message",
     *        value: "_message",
     *      }
     *   ]
     *  }
     *
     *  Result
     *  "if(_val == 1){\n
     *   message = _message;\n
     *   }"
     */
    write(json: IIf) {
      let text = `if(${json.condition})`;
      // if else is turned on
      if (!json.condition) {
        // If no condition setted
        text = "else";
      } else if (json.else) {
        // if there is a condition and else = true (else if), if there isn't (else)
        text = `else ${text}`;
      }
      text += "{\n";
      text += writeContent(json.content, (request: IRequest) => {
        text += "";
      });
      text += "}\n";

      return text;
    },
  };

  return ifWriter;
}

export default createIfWriter;
