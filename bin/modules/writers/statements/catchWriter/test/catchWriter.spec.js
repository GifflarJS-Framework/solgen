"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("CatchWriter", function () {
    var contentWriterMock = {
        write: function (content) {
            return "";
        },
    };
    var catchModel = tsyringe_1.container.resolve("CatchModel");
    var catchWriter = tsyringe_1.container.resolve("CatchWriter");
    catchWriter._init(contentWriterMock);
    it("Writing Catch", function () {
        var _catch = catchModel.execute({
            identifier: "Error",
            parameters: [{ type: "bytes", name: "err" }],
        });
        var result = catchWriter.write(_catch);
        var expected = "catch Error(bytes memory err){\n}";
        expect(result).toEqual(expected);
    });
    it("Writing Catch without identifier", function () {
        var _catch = catchModel.execute({
            parameters: [{ type: "bytes", name: "err" }],
        });
        var result = catchWriter.write(_catch);
        var expected = "catch (bytes memory err){\n}";
        expect(result).toEqual(expected);
    });
});
