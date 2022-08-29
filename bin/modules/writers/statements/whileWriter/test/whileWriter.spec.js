"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("WhileWriter", function () {
    var contentWriterMock = {
        write: function (content) {
            return "emit myEvent(age);\n";
        },
    };
    var whileModel = tsyringe_1.container.resolve("WhileModel");
    var whileWriter = tsyringe_1.container.resolve("WhileWriter");
    whileWriter._init(contentWriterMock);
    it("Writing", function () {
        var _while = whileModel.execute({ condition: "a == b" });
        var result = whileWriter.write(_while);
        var expected = "while(a == b){\nemit myEvent(age);\n}\n";
        expect(result).toEqual(expected);
    });
});
