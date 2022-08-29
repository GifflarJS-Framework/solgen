"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("For Writer", function () {
    var contentWriterMock = {
        write: function (content) {
            return "emit myEvent(age);\n";
        },
    };
    it("Writing For", function () {
        var forWriter = tsyringe_1.container.resolve("ForWriter");
        forWriter._init(contentWriterMock);
        var myfor = {
            statement: "for",
            variable: {
                statement: "variable",
                type: "uint",
                name: "i",
                value: "0",
            },
            condition: "i < 100",
            expression: {
                statement: "expression",
                value: "i++",
            },
            content: [],
        };
        var expected = "for(uint i = 0;i < 100;i++){\nemit myEvent(age);\n}\n";
        var result = forWriter.write(myfor);
        expect(result).toEqual(expected);
    });
    it("Writing For without variable", function () {
        var forWriter = tsyringe_1.container.resolve("ForWriter");
        forWriter._init(contentWriterMock);
        var myfor = {
            statement: "for",
            condition: "i < 100",
            expression: {
                statement: "expression",
                value: "i++",
            },
            content: [],
        };
        var expected = "for(;i < 100;i++){\nemit myEvent(age);\n}\n";
        var result = forWriter.write(myfor);
        expect(result).toEqual(expected);
    });
    it("Writing For without condition", function () {
        var forWriter = tsyringe_1.container.resolve("ForWriter");
        forWriter._init(contentWriterMock);
        var myfor = {
            statement: "for",
            variable: {
                statement: "variable",
                type: "uint",
                name: "i",
                value: "0",
            },
            expression: {
                statement: "expression",
                value: "i++",
            },
            content: [],
        };
        var expected = "for(uint i = 0;;i++){\nemit myEvent(age);\n}\n";
        var result = forWriter.write(myfor);
        expect(result).toEqual(expected);
    });
    it("Writing For without expression", function () {
        var forWriter = tsyringe_1.container.resolve("ForWriter");
        forWriter._init(contentWriterMock);
        var myfor = {
            statement: "for",
            variable: {
                statement: "variable",
                type: "uint",
                name: "i",
                value: "0",
            },
            condition: "i < 100",
            content: [],
        };
        var expected = "for(uint i = 0;i < 100;){\nemit myEvent(age);\n}\n";
        var result = forWriter.write(myfor);
        expect(result).toEqual(expected);
    });
    it("Writing For without any parameter", function () {
        var forWriter = tsyringe_1.container.resolve("ForWriter");
        forWriter._init(contentWriterMock);
        var myfor = {
            statement: "for",
            content: [],
        };
        var expected = "for(;;){\nemit myEvent(age);\n}\n";
        var result = forWriter.write(myfor);
        expect(result).toEqual(expected);
    });
});
