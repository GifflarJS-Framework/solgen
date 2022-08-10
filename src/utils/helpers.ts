// const { exec } = require("child_process");

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
