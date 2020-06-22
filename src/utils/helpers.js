const exec = require("child_process").exec;

module.exports = {
  sleep: (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  },

  capitalize: (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  isObjEmpty: (obj) => {
    return !Object.keys(obj).length;
  },

  isObject: (obj) => {
    return typeof obj === "object";
  },

  getCommaExpression(list) {
    let str = "";
    list.map((item) => {
      str += ", " + item;
    });

    if (str) {
      str = str.substr(2);
    }

    return str;
  },

  getKeysValuesFrom: (obj) => {
    // Getting variables types
    const keys = Object.keys(obj);
    // Getting variables identifiers
    const values = Object.values(obj);

    return { keys, values };
  },
};
