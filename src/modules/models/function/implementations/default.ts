import createContentModel from "@models/content";
import { ICreateFunctionDTO } from "../types/ICreateFunctionDTO";
import { IFunction } from "../types/IFunction";
import { IFunctionJson } from "../types/IFunctionJson";
import { IInput } from "../types/IInput";

/**
 * @todo Finish documentation
 * @author Levy Santiago
 * @module
 * @category Model
 * @name createFunctionModel
 * @description A <b>Factory</b> for creating a function object model (json).
 * @param {string} _name The name of the function.
 * @param {string} _scope The scope of the function (public, private).
 * @param {boolean} [_isConstructor = false] If the function is a constructor.
 * @param {Object[]} [_inputs = []] The inputs of the function.
 * @param {Object[]} [_outputs = []] The values that the function will return.
 * @returns {Object} The function object model.
 * @requires createContentModel
 * @example
 * Usage
 * const myFunction = createFunctionModel("myFunction", "public");
 *
 * Return
 * {
 *  name: "myFunction",
 *  scope: "public",
 *  _isConstructor: false,
 *  inputs: [],
 *  outputs: []
 * }
 */
function createFunctionModel({
  name,
  scope,
  isConstructor = false,
  inputs,
  outputs,
  globalVars = [],
}: ICreateFunctionDTO): IFunction {
  const content_json = createContentModel({ globalVars });
  /**
   * @todo Write documentation
   */
  const myFunction: IFunction = {
    name,
    scope,
    isConstructor: isConstructor || false,
    inputs: inputs || [],
    outputs: outputs || [],
    modifiers: [],
    ...content_json,

    /**
     * @description Returns function as JSON
     */
    json(): IFunctionJson {
      const jsonfunction = JSON.stringify(this);
      return JSON.parse(jsonfunction);
    },

    /**
     * @description Returns function JSON as strign
     */
    toString(): string {
      return JSON.stringify(this);
    },

    /**
     * @description Defines a function function input
     */
    setInput(type: string, variable: string): IFunction {
      // Creating input
      const newInput: IInput = {
        name: variable,
        type,
      };
      this.inputs.push(newInput);

      return this;
    },

    /**
     * @description Defines a function output
     */
    setOutput(variable: string): IFunction {
      this.outputs.push(variable);
      return this;
    },
  };

  return myFunction;
}

export default createFunctionModel;
