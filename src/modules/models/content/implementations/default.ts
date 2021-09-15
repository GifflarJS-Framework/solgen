/* eslint-disable no-use-before-define */
import createAssignmentModel from "@models/assignment";
import createEventCallModel from "@models/eventCall";
import createMethodCallModel from "@models/methodcall";
import { IInput } from "@models/function/types/IInput";
import createIfModel from "@models/if";
import { IIf } from "@models/if/types/IIf";
import createNewContractModel from "@models/newcontract";
import { INewContract } from "@models/newcontract/types/INewContract";
import createVariableModel from "@models/variable";
import { IVariable } from "@models/variable/types/IVariable";
import createExpressionModel from "@models/expression/";
import { IContent } from "../types/IContent";
import { ICreateContentDTO } from "../types/ICreateContentDTO";
import { IStackItem } from "../types/IStackItem";

interface IIfContent extends IIf, IContent {}

/**
 * @author Levy Santiago
 * @module
 * @category Model
 * @name createContentModel
 * @description A <b>Factory</b> for creating an content object model (json).
 * This object is used for creating all content statements like ifs, assignments...
 * It is most used only for components which has a content (function, if, ...).
 * @returns {Object} The content object model.
 * @requires createAssignmentModel
 * @requires createVariableModel
 * @requires createIfModel
 * @example
 * Usage
 * const contentModel = createContentModel();
 *
 * Return
 * {
 *   content: []
 *   beginIf: [Function],
 *   beginElseIf: [Function],
 *   beginElse: [Function],
 *   endIf: [Function],
 *   endElse: [Function],
 *   endElseIf: [Function]
 *   setEventCall: [Function]
 *   setAssignment: [Function],
 *   setVariable: [Function]
 * }
 *
 */
function createContentModel({ globalVars = [] }: ICreateContentDTO): IContent {
  // Copying the array
  const contentVars: Array<IVariable> = [].concat(Object.assign(globalVars));
  const stack: Array<any> = [
    {
      content: [],
    },
  ];
  let top = 0;

  /**
   * @author Levy Santiago
   * @name setVariable
   * @method
   * @description Sets a new variable declaration inside the content.
   * @param {string} type The type of the variable ("string", "uint", ...)
   * @param {string} name The variable name.
   * @param {string} [value] The eventual value to be assigned to it during the declaration.
   * @returns {Object} The content object model with the new variable added.
   * @example
   * Usage
   * contentModel.setVariable("string", "name", "bob");
   *
   * Return
   * {
   *   content: [
   *     {
   *       statement: "variable",
   *       type: "string",
   *       name: "name",
   *       value: "bob"
   *     }
   *   ]
   * }
   */
  function setVariable(
    type: string,
    name: string,
    value: string | INewContract
  ): IContent {
    const newVariable = createVariableModel({ type, name, value });
    contentVars.push(newVariable);
    stack[top].content.push(newVariable);
    const contentItem: IContent = _assignFunctions(stack[top]);
    return contentItem;
  }

  /**
   * @todo Finish documentation
   * @param {*} variable
   * @param {*} method_
   * @param {*} value
   */
  function setMethodCall(
    variable: string,
    method: string,
    value: string
  ): IContent {
    const newMethodCall = createMethodCallModel({ variable, method, value });
    stack[top].content.push(newMethodCall);
    const contentItem: IContent = _assignFunctions(stack[top]);
    return contentItem;
  }

  /**
   * @todo Write documentation
   * @param {*} variable
   * @param {*} expression
   */
  function setAssignment(variable: string, expression: string): IContent {
    const expressionModel = createExpressionModel({ value: expression });
    const newAssignment = createAssignmentModel({
      variable,
      value: expressionModel,
    });
    stack[top].content.push(newAssignment);
    const contentItem: IContent = _assignFunctions(stack[top]);
    return contentItem;
  }

  /**
   * @todo Write documentation, handle error when variable not in contentVars
   * @param {string} name The name of the event.
   * @param {string[]} inputNames Array of the variable names to pass for the event call.
   */
  function setEventCall(name: string, inputNames: Array<string>): IContent {
    const inputs: Array<IInput> = [];
    if (inputNames) {
      inputNames.map((inputName) => {
        const variable = contentVars.filter((item) => {
          return item.name === inputName;
        })[0];
        if (variable) {
          inputs.push({ name: variable.name, type: variable.type });
        }
        return variable;
      });
    }
    const newEventCall = createEventCallModel({ name, inputs });
    stack[top].content.push(newEventCall);
    const contentItem: IContent = _assignFunctions(stack[top]);
    return contentItem;
  }

  /**
   * @todo Write function and documentation
   * @param {*} variable
   * @param {*} contractName
   * @param {*} args
   */
  function setContractVariable(
    variable: string,
    contractName: string,
    args: Array<string>
  ): IContent {
    const newContract = createNewContractModel({ contractName, args });
    return setVariable(contractName, variable, newContract);
  }

  /**
   * @todo Write documentation
   */
  function beginIf(condition: string, onElse?: boolean): IContent {
    const newIf = createIfModel({ condition, onElse });
    const newIfContent: IIfContent = _assignFunctions(newIf);
    stack.push(newIfContent);
    top += 1;
    return newIfContent;
  }

  /**
   * @todo Write documentation
   */
  function beginElseIf(condition: string): IContent {
    if (!condition) {
      throw new Error("Condition cannot be ommited.");
    }
    return beginIf(condition, true);
  }

  /**
   * @todo Write documentation
   */
  function beginElse(): IContent {
    return beginIf("", true);
  }

  /**
   * @todo Write documentation
   */
  function endIf(): IContent {
    if (stack.length > 1) {
      const json = stack.pop();
      top -= 1;
      if (json) {
        stack[top].content.push(json);
      }
    }
    const contentItem: IContent = _assignFunctions(stack[top]);
    return contentItem;
  }

  /**
   * @author Levy Santiago
   * @name _assignFunctions
   * @method
   * @private
   * @description Assign the statements functions needed to build the content.
   * @param {Object} obj The current json content object.
   * @returns {Object} The same object with all statement functions assigned.
   * @example
   * const json = _assignFunctions(obj);
   */
  function _assignFunctions<T>(obj: any): T {
    const _obj = {
      ...obj,
      beginIf,
      beginElse,
      beginElseIf,
      endIf,
      endElseIf: endIf,
      setEventCall,
      setAssignment,
      setVariable,
      setMethodCall,
      setContractVariable,
    };

    return _obj;
  }

  // Matching the internal functions
  const json: IContent = _assignFunctions(stack[top]);

  return json;
}

export default createContentModel;
