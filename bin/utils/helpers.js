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
    getCommaExpression: function (list) {
        var str = "";
        list.map(function (item) {
            str += ", ".concat(item);
            return str;
        });
        if (str) {
            str = str.substr(2);
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
