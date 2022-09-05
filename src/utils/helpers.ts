// const { exec } = require("child_process");

import { IInput } from "@modules/types/IInput";
import { IOutput } from "@modules/types/IOutput";
import { ITypeName } from "@modules/types/ITypeName";
import { ITypeNameInput } from "@modules/types/ITypeNameInput";
import { ITypeNameOutput } from "@modules/types/ITypeNameOutput";

interface IObjectParameters {
  keys: Array<string>;
  values: Array<any>;
}

const helpers = {
  sleep: (ms: number): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  },

  capitalize: (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  isObjEmpty: (obj: any): boolean => {
    return !Object.keys(obj).length;
  },

  isObject: (obj: any): boolean => {
    return typeof obj === "object";
  },

  writeTypeName: (type: ITypeName): string => {
    let _type: string | undefined = type.regularType;
    if (type.customType) _type = type.customType;
    if (type.array) {
      const _arrayType = helpers.writeTypeName(type.array.arrayType);
      _type = `${_arrayType}[${type.array.arraySize || ""}]`;
    }
    if (!_type) throw new Error("Type is not defined");
    return _type;
  },

  castITypeNameInputsToInputs: (
    typeNameInputs: Array<ITypeNameInput>
  ): Array<IInput> => {
    // Casting ITypeNameInput to IInput
    const inputs = typeNameInputs.map((p) => {
      return {
        name: p.name,
        type: helpers.writeTypeName(p.type),
      };
    });

    return inputs;
  },

  castITypeNameOutputsToOutputs: (
    typeNameOutputs: Array<ITypeNameOutput>
  ): Array<IOutput> => {
    // Casting ITypeNameOutput to IOutput
    const outputs = typeNameOutputs.map((p) => {
      return {
        name: p.name,
        type: helpers.writeTypeName(p.type),
      };
    });

    return outputs;
  },

  getCommaExpression(list: Array<string>): string {
    let str = "";
    list.map((item) => {
      str += `, ${item}`;
      return str;
    });

    if (str) {
      str = str.substring(2);
    }

    return str;
  },

  getKeysValuesFrom: (obj: any): IObjectParameters => {
    // Getting variables types
    const keys = Object.keys(obj);
    // Getting variables identifiers
    const values = Object.values(obj);

    return { keys, values };
  },
};

export default helpers;
