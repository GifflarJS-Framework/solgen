// const { exec } = require("child_process");

import { ITypeName } from "modules/types/ITypeName";

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
    if (type.array)
      _type = `${type.array.arrayType}[${type.array.arraySize || ""}]`;
    if (!_type) throw new Error("Type is not defined");
    return _type;
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
