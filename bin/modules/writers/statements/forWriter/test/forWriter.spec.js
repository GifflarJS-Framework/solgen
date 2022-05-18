"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("For Writer", function () {
    var contentWriterMock = {
        write: function (content) {
            return "emit myEvent(age);\n";
        },
    };
    it("Writing If", function () {
        var forWriter = tsyringe_1.container.resolve("ForWriter");
        forWriter._init(contentWriterMock);
        var myfor = {
            statement: "for",
            assignment: {
                statement: "assignment",
                variable: "i",
                value: {
                    statement: "expression",
                    value: "0",
                },
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
});
