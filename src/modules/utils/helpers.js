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

  runShellCommand: (command, callback) => {
    exec(command, (err, stdout, stderr) => {
      if (err) {
        callback(err, null, null);
      } else if (stderr) {
        callback(null, stdout, stderr);
      } else {
        callback(null, stdout, null);
      }
    });
  },

  getKeysValuesFrom: (obj) => {
    // Getting variables types
    const keys = Object.keys(obj);
    // Getting variables identifiers
    const values = Object.values(obj);

    return { keys, values };
  },
};
