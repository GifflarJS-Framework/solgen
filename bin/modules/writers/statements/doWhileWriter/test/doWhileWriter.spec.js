"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("DoWhileWriter", function () {
    var contentWriterMock = {
        write: function (content) {
            return "emit myEvent(age);\n";
        },
    };
    var doWhileModel = tsyringe_1.container.resolve("DoWhileModel");
    var doWhileWriter = tsyringe_1.container.resolve("DoWhileWriter");
    doWhileWriter._init(contentWriterMock);
    it("Writing", function () {
        var _doWhile = doWhileModel.execute({ condition: "a == b" });
        var result = doWhileWriter.write(_doWhile);
        var expected = "do {\nemit myEvent(age);\n} while(a == b)";
        expect(result).toEqual(expected);
    });
});
