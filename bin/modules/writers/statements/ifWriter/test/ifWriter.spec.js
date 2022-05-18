"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("If Writer", function () {
    var contentWriterMock = {
        write: function (content) {
            return "age = 20;\n";
        },
    };
    var ifWriter = tsyringe_1.container.resolve("IfWriter");
    ifWriter._init(contentWriterMock);
    it("Writing If", function () {
        var myif = {
            statement: "if",
            condition: "2 > 1",
            content: [],
            else: false,
        };
        var expected = "if(2 > 1){\nage = 20;\n}";
        var result = ifWriter.write(myif);
        expect(result).toMatch(expected);
    });
    it("Writing Else", function () {
        var myelse = {
            statement: "if",
            condition: "",
            content: [],
            else: true,
        };
        var expected = "else{\nage = 20;\n}";
        var result = ifWriter.write(myelse);
        expect(result).toMatch(expected);
    });
});
