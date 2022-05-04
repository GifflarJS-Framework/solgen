import { IVariable } from "@models/variable/types/IVariable";
// import helpers from "@utils/helpers";
// import { IOutputWriter } from "../types/IOutputWriter";
// import { IOutputWriterCallbackObject } from "../types/IOutputWriterCallbackObject";

// /**
//  * @name createOutputWriter
//  * @description A **Factory** that creates a new writer of functions outputs (returns).
//  * @param {Object[]} variables The contract and function variables defined.
//  * @example
//  * {
//  *     type: "string",
//  *     scope: "public",
//  *     name: "message",
//  *     setMethod: true,
//  *   },
//  *   {
//  *     type: "string[]",
//  *     scope: "public",
//  *     name: "messages",
//  *     setMethod: true,
//  *   }
//  */
// function createOutputWriter(variables: Array<IVariable> = []): IOutputWriter {
//   const outputWriter: IOutputWriter = {
//     /**
//      * @name write
//      * @description Writes the Solidity return and returns string representation.
//      * @param {Object[]} outputs
//      * @param {Function} cb
//      * @example
//      * Outputs
//      * ["message", "messages"]
//      *
//      * Result
//      * "return message, messages;"
//      * "returns (string, string[])" (callback)
//      *
//      * Usage
//      * text_return += outputWriter.write(f.outputs, (request) => {
//      *   text_returns = request.text_returns;
//      * });
//      */
//     write(
//       outputs: Array<string>,
//       callback: (object: IOutputWriterCallbackObject) => void
//     ): string {
//       let text_return = "";
//       let text_returns = "";
//       const values: Array<string> = [];
//       const types: Array<string> = [];

//       if (outputs) {
//         outputs.map((output) => {
//           const variable = variables.filter((variableItem) => {
//             return variableItem.name === output;
//           });

//           if (variable[0]) {
//             values.push(variable[0].name);
//             types.push(variable[0].type);
//           }
//           return variable;
//         });
//         if (values.length && types.length) {
//           text_return += helpers.getCommaExpression(values);
//           text_returns += helpers.getCommaExpression(types);

//           text_return = `return (${text_return});\n`;
//           text_returns = `returns (${text_returns})`;
//         }
//       }

//       if (typeof callback === "function") {
//         callback({ text_returns });
//       }

//       return text_return;
//     },
//   };

//   return outputWriter;
// }

// export default createOutputWriter;
