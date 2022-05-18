"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Content Writer", function () {
    var contentWriter = tsyringe_1.container.resolve("ContentWriter");
    it("Writing Content", function () {
        var contents = [
            {
                statement: "variable",
                type: "uint",
                name: "age",
                value: "20",
            },
            {
                statement: "if",
                condition: "age > 15",
                content: [
                    {
                        statement: "assignment",
                        variable: "age",
                        value: { statement: "expression", value: "30" },
                    },
                    {
                        statement: "event_call",
                        name: "ageUpdate",
                        variables: ["age"],
                    },
                ],
                else: false,
            },
        ];
        var expected = "uint age = 20;\nif(age > 15){\nage = 30;\nemit ageUpdate(age);\n}";
        var result = contentWriter.write(contents);
        expect(result).toMatch(expected);
    });
});
