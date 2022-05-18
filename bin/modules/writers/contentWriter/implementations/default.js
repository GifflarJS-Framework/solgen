"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import createRequest from "../../../models/request";
// import { IRequest } from "../../../models/request/types/IRequest";
// import createGlobalVariableWriter from "../../globalVariableWriter";
// import createAssignmentWriter from "../../statements/assignmentWriter";
// import createEventCallWriter from "../../statements/eventCallWriter";
// import createForWriter from "../../statements/forWriter";
// import createIfWriter from "../../statements/ifWriter";
// import createMethodCallWriter from "../../statements/methodCallWriter";
// import createVariableWriter from "../../variableWriter";
// import { IContentWriter } from "../types/IContentWriter";
// /**
//  * @name createContentWriter
//  * @description A **Factory** that creates a contentWriter that is resposible
//  * for knowing all the types of statement (if, else, ...) and also for providing
//  * the function to write a content of a statement (which eventually
//  * can contain another statement inside).
//  * @returns {Object} The contentWriter object.
//  * @example
//  * Return
//  * {
//  *   write: [Function]
//  * }
//  */
// function createContentWriter(): IContentWriter {
//   let request = createRequest();
//   const ifWriter = createIfWriter(write);
//   const forWriter = createForWriter(write);
//   const assignmentWriter = createAssignmentWriter();
//   const eventCallWriter = createEventCallWriter();
//   const callMethodWriter = createMethodCallWriter();
//   const variableWriter = createVariableWriter();
//   const statements = {
//     assignment: assignmentWriter.write,
//     if: ifWriter.write,
//     for: forWriter.write,
//     event_call: eventCallWriter.write,
//     variable: variableWriter.write,
//     method_call: callMethodWriter.write,
//   };
//   // All statement control that doesn't need the ; in the end
//   const controls = ["if", "for"];
//   /**
//    * @name write
//    * @description Writes the content of another statement.
//    * @param {Object} content The Object content of the statement.
//    * @param {Function} cb The callback function to handle any request to create an event.
//    * @returns {string} The content parsed to Solidity code as a string.
//    * @example
//    * Prototype
//    * function writeContent(content, cb) {
//    * //[...]
//    * }
//    *
//    * Json
//    * [
//    *     {
//    *       statement: "assignment",
//    *       variable: "message",
//    *       value: "_message",
//    *     },
//    *     {
//    *       statement: "if",
//    *       condition: "_val == 1",
//    *       content: [
//    *         {
//    *           statement: "event_call",
//    *           name: "temperatureOverflow",
//    *           args: ["_message, _val"],
//    *         },
//    *         {
//    *           statement: "assignment",
//    *           variable: "message",
//    *           value: "_message",
//    *         }
//    *       ]
//    *     }
//    *  ]
//    *
//    * Usage
//    * code += contentWriter.writeContent(f.content, (_request) => {
//    *    console.log(_request);
//    * });
//    *
//    * Return
//    * "message = _message;\n
//    * if(_val == 1){\n
//    * emit temperatureOverflow(_message, _val);\n
//    * message = _message;\n
//    * }"
//    */
//   function write(
//     content: Array<IContents>,
//     callback: (request: IRequest) => void
//   ): string {
//     let text = "";
//     // Defining the statement content
//     content.map((item) => {
//       const handler = statements[item.statement];
//       if (handler) {
//         const anyItem: any = item;
//         text += handler(anyItem, (_request: IRequest) => {
//           request = _request;
//         });
//         if (!controls.includes(item.statement)) {
//           text += ";\n";
//         }
//       }
//       return text;
//     });
//     if (callback && typeof callback === "function") {
//       callback(request);
//     }
//     return text;
//   }
//   const contentWriter: IContentWriter = {
//     write,
//   };
//   return contentWriter;
// }
// export default createContentWriter;
