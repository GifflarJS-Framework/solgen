"use strict";
// const { exec } = require("child_process");
Object.defineProperty(exports, "__esModule", { value: true });
var helpers = {
    sleep: function (ms) {
        return new Promise(function (resolve) {
            setTimeout(resolve, ms);
        });
    },
    capitalize: function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    isObjEmpty: function (obj) {
        return !Object.keys(obj).length;
    },
    isObject: function (obj) {
        return typeof obj === "object";
    },
    writeTypeName: function (type) {
        var _type = type.regularType;
        if (type.customType)
            _type = type.customType;
        if (type.array)
            _type = "".concat(type.array.arrayType, "[").concat(type.array.arraySize || "", "]");
        if (!_type)
            throw new Error("Type is not defined");
        return _type;
    },
    getCommaExpression: function (list) {
        var str = "";
        list.map(function (item) {
            str += ", ".concat(item);
            return str;
        });
        if (str) {
            str = str.substring(2);
        }
        return str;
    },
    getKeysValuesFrom: function (obj) {
        // Getting variables types
        var keys = Object.keys(obj);
        // Getting variables identifiers
        var values = Object.values(obj);
        return { keys: keys, values: values };
    },
};
exports.default = helpers;